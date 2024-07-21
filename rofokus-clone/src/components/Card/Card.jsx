import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card(prop) {
  const { width, head, head2, foot, l, f, bg } = prop;
  return (
    <div
      className={` bg-zinc-800 rounded-md p-4 h-[45vh] flex flex-col justify-between ${width} ${
        bg ? "  hover:bg-violet-600  " : null
      } hover:p-5`}
    >
      <div className="  ">
        <div className="up w-full flex justify-between items-center ">
          <h1>{head}</h1>
          <FaArrowRightLong />
        </div>
        <h1 className="mt-2 text-3xl">{head2}</h1>
      </div>
      <div className="low ">
        {f ? (
          <h1 className="text-7xl tracking-tighter leading-none">
            Start a Project
          </h1>
        ) : null}
        {f ? (
          <button className="px-4 py-2 border-[1px] mt-4 border-gray-400 rounded-full">
            Contact us
          </button>
        ) : null}
        {l ? <p className="text-sm opacity-45">{foot}</p> : null}
      </div>
    </div>
  );
}

export default Card;
