import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button(prop) {
  const { ButtonValu } = prop;
  return (
    <div className="bg-white text-black px-4 rounded-xl py-1 flex  items-center gap-3 text-sm cursor-pointer">
      <span>{ButtonValu}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
