import React from "react";
import { FaChevronRight } from "react-icons/fa";

function Input() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-4">
      <h2 className="text-2xl tracking-tighter opacity-85">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div className=" px-5 flex  justify-between items-center">
        <input
          type="text"
          placeholder="Email address"
          className="h-14 px-3  rounded-md border-[1.5px] w-[64%]  bg-transparent outline-none placeholder:text-xl placeholder:text-white "
        />
        <button className="h-14 rounded-md bg-red-600 text-2xl px-8 flex items-center justify-between gap-3">
          Get Started <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Input;
