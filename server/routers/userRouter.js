import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../config/utils.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

// @desc sign-up a new user
// @routes POST /db/users/signup
// @access Public
userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const { sub, name, picture, email, email_verified } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const user = new User({
      name: name,
      email: email,
      picture: picture,
      sub: sub,
      email_verified: email_verified,
    });

    if (user) {
      const createdUser = await user.save();
      res.status(201).json({
        _id: createdUser._id,
        sub: createdUser.sub,
        email_verified: createdUser.email_verified,
        name: createdUser.name,
        email: createdUser.email,
        picture: createdUser.picture,
        token: generateToken(createdUser),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  })
);

userRouter.get(
  '/:sub',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.sub);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User Not Found' });
    }
  })
);

export default userRouter;
