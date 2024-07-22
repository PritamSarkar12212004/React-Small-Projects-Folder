import React from "react";
import { IoLanguage } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
function Langusue() {
  return (
    <button className="flex items-center gap-2 border-[1.5px] border-zinc-300 rounded-md px-3 py-1 w-32">
      <IoLanguage /> English
      <FaChevronDown />
    </button>
  );
}

export default Langusue;
