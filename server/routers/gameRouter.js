import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import GameDB from './../models/gameModel.js';
import mongoose from 'mongoose';

const gameRouter = express.Router();

gameRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const games = await GameDB.find({});
    res.send({ games });
  })
);

gameRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const game = await GameDB.findById(req.params.id).populate('name');
    if (game) {
      res.send(game);
    } else {
      res.status(404).send({ message: 'Game Not Found' });
    }
  })
);

export default gameRouter;
