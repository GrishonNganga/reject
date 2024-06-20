import dbConnect from "../../../database/mongodb";
import Vote from "../../../models/Vote";
import VoteCard from "./vote-card";

export default async function SupportedList() {
  const votes = await getVotes(true);
  return (
    <div className="flex flex-col">
      {votes.map((vote) => (
        <VoteCard key={vote.name} vote={vote} />
      ))}
    </div>
  );
}

const getVotes = async (type: boolean) => {
  await dbConnect();
  const data = await Vote.find({ vote: type });
  return data;
};
