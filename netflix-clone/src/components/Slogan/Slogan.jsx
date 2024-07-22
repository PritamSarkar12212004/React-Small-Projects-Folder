import React from "react";
import Inputs from "../EmailInput/Inputs";

function Slogan() {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-center items-center flex-col gap-7">
      <h1 className="text-6xl font-extrabold text-center tracking-tight ">
        Unlimited movies, TV shows and more
      </h1>
      <h2 className="text-3xl opacity-65">Watch anywhere. Cancel anytime.</h2>
      <Inputs />
    </div>
  );
}

export default Slogan;
