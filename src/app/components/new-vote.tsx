"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createVote } from "@/lib/actions/votes";

type Vote = {
  name: string;
  constituency: string;
  picture: string;
  vote: boolean;
};

export default function New() {
  const [vote, setVote] = useState({
    name: "",
    constituency: "",
    picture: "",
    vote: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVote((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("VOTE", vote);
    await createVote(vote);
  };

  return (
    <div className="container mx-auto flex flex-col gap-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter the name of the MP"
              value={vote?.name || ""}
              required
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="constituency">Constituency</Label>
            <Input
              id="constituency"
              name="constituency"
              placeholder="Enter the constituency of the MP"
              value={vote?.constituency || ""}
              required
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="picture">Photo</Label>
            <Input
              id="picture"
              name="picture"
              placeholder="Enter the photo of the MP"
              value={vote?.picture || ""}
              required
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="picture">Vote</Label>
            <Select
              onValueChange={(value) => {
                setVote((prevState) => ({
                  ...prevState,
                  vote: value === "true" ? true : false,
                }));
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Vote" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"true"}>Yes</SelectItem>
                <SelectItem value={"false"}>No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="">
          <Button className="w-full">Add MP</Button>
        </div>
      </form>
    </div>
  );
}
