import React from "react";

function Footer() {
  return (
    <div className="">
      <h1 className="text-9xl">
        refokus
        <span className="text-4xl text-zinc-500 hover:text-white cursor-pointer">
          .com
        </span>
      </h1>
      <ul className="flex mt-10   gap-10 text-sm">
        {["Privacy Policy", "Cookies", "Terms of Use", "Impression"].map(
          (item, index) => (
            <li
              className=" list-none cursor-pointer opacity-45 hover:opacity-100 "
              key={index}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Footer;
