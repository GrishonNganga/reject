import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  constituency: { type: String, required: false },
  picture: { type: String, required: false }, // URL of the uploaded picture
  vote: { type: Boolean, default: false },
});

const Vote = mongoose.models.Vote || mongoose.model("Vote", voteSchema);

export default Vote;
