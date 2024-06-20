import Vote from "../../../models/Vote";
import dbConnect from "../../../database/mongodb";
import NewVote from "../components/new-vote";
import { createVote } from "@/lib/actions/votes";

export default async function New() {
  return <NewVote />;
}
