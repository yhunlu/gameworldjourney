import { mongoose } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    sub: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    email_verified: { type: Boolean, required: true },
    picture: {
      type: String,
      default: '/images/emptyAvatar.png',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
