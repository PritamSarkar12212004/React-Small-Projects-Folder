import React from "react";
import { FaPlus } from "react-icons/fa6";

function Question(prop) {
  const { ques } = prop;
  return (
    <div className="w-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer px-7 py-5 rounded-sm flex justify-between items-center">
      <h1 className="text-2xl">{ques}</h1>
      <div className="text-5xl font-light">
        <FaPlus />
      </div>
    </div>
  );
}

export default Question;
