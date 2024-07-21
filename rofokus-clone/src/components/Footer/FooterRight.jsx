import React from "react";

function FooterRight() {
  return (
    <div className="flex gap-20  w-full justify-end items-baseline">
      <div className="">
        <h1>Social</h1>
        <ul className="flex flex-col gap-[2px] mt-5 opacity-45 ">
          {["Instagram", "Twitter", "LinkedIn"].map((itms, index) => {
            return (
              <li className="cursor-pointer" key={index}>
                {itms}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <h1>Pages</h1>
        <ul className="flex flex-col gap-[2px] mt-5 opacity-45 ">
          {["Home", "Work", "Careers", "Control"].map((itms, index) => {
            return (
              <li className="cursor-pointer" key={index}>
                {itms}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-full flex items-center flex-col justify-center">
        <div className="text-sm w-28">
          Refokus.com is the best platfrom to serve the world for working in thr
          internet
        </div>
        <button className="px-3 py-1 bg-blue-600 rounded-xl mt-2">work together</button>
      </div>
    </div>
  );
}

export default FooterRight;
