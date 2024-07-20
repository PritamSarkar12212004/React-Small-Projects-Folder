import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

function NavBar() {
  const ButtonValu = "Get Started";
  return (
    <div className="max-w-screen-lg mx-auto   py-4 flex  items-center justify-between border-b-[1px] border-gray-700">
      <div className="leftContent flex  gap-20 items-center ">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-10 text-sm ">
          {["Home", "Work", "Culture", "", "News"].map((item, index) =>
            item.length === 0 ? (
              <span className=" inline-block w-[2px] h-5 rounded-xl bg-gray-500"></span>
            ) : (
              <NavLink
                to={item}
                className="text-white flex items-center gap-1 cursor-pointer "
              >
                <span className=" inline-block w-1 h-1 bg-green-500 rounded-full"></span>
                {item}
              </NavLink>
            )
          )}
        </div>
      </div>
      <div className="rightContent flex items-center">
        <Button ButtonValu={ButtonValu} />
      </div>
    </div>
  );
}

export default NavBar;
