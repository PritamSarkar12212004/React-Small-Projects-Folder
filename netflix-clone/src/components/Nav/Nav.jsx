import React from "react";
import Buttons from "./Buttons";
function Nav() {
  return (
    <div className="max-w-screen-lg mx-auto h-20 flex justify-between items-center pt-3">
      <img className="h-full" src="public/Logo/Netflix_Logo_RGB.png" alt="" />
      <Buttons />
    </div>
  );
}

export default Nav;
