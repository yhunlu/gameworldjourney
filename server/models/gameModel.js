import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const gameSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    name: { type: String, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const GameDB = mongoose.model('Game', gameSchema);

export default GameDB;
