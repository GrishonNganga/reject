import Image from "next/image";
import { X, Check } from "lucide-react";

type VoteProps = {
  name: string;
  constituency: string;
  picture: string;
  vote: boolean;
};

export default function VoteCard({ vote }: { vote: VoteProps }) {
  return (
    <div className="flex gap-x-4 items-center">
      <div className="w-28 aspect-square">
        <Image
          src={vote.picture}
          width={500}
          height={500}
          quality={100}
          className="w-full rounded"
          alt={vote.name}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-2 text-2xl font-bold">
          <div>{vote.name}</div>
        </div>
        <div className="flex gap-x-2">
          <div className="text-gray-500 font-semibold text-lg">
            {vote.constituency}
          </div>
        </div>
        {vote.vote ? (
          <div className="flex gap-x-2 items-center">
            <div className="text-black font-semibold text-sm">I support</div>
            <div>
              <Check className="text-red-500" />
            </div>
          </div>
        ) : (
          <div className="flex gap-x-2 items-center">
            <div className="text-black font-semibold text-sm">I reject</div>
            <div>
              <X className="text-green-500" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
