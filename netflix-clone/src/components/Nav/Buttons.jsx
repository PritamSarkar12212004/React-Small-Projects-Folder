import React from "react";

import Langusue from "../Button/Langusue";

function Buttons() {
  return (
    <div  className="flex gap-4">
      <Langusue />
      <button className="px-4 py-1 bg-red-600 rounded-md text-sm ">Sing in</button>
    </div>
  );
}

export default Buttons;
