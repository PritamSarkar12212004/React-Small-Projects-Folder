import React from "react";
import Quiestion from "./Question";
import Inputs from "../EmailInput/Inputs";
function Questions() {
  return (
    <div className="mt-2 w-full bg-black">
      <div className="max-w-screen-lg mx-auto text-center py-20">
        <h1 className="text-6xl font-bold tracking-tight ">
          Frequently Asked Questions
        </h1>
        <div className="w-full flex flex-col gap-2 mt-10">
          <Quiestion ques={"What is Netflix?"} />
          <Quiestion ques={"How much does Netflix cost?"} />
          <Quiestion ques={"Where can I watch?"} />
          <Quiestion ques={"How do I cancel?"} />
          <Quiestion ques={"What can I watch on Netflix?"} />
          <Quiestion ques={"Is Netflix good for kids?"} />
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <div className="w-[69%] flex justify-center items-center">
            <Inputs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
