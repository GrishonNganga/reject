"use server";

import dbConnect from "../../../database/mongodb";
import Vote from "../../../models/Vote";

type Vote = {
  name: string;
  constituency: string;
  picture: string;
  vote: boolean;
};

export const createVote = async (vote: Vote) => {
  await dbConnect();
  const v = new Vote(vote);
  await v.save();
};
