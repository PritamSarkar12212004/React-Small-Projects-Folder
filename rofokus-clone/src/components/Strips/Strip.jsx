import React from "react";

function Strip(prop) {
  const { StripData } = prop;
  console.log(StripData);

  return (
    <div className="w-full h-16  flex  items-center border-[1px] border-zinc-700">
      {StripData.map((item, index) => {
        return (
          <div className=" flex w-[20.6%]  justify-between items-center border-x-[1px] border-zinc-700 h-full gap-10 px-2 text-xl capitalize text-zinc-300    ">
            <h1>{item.name}</h1>
            <h1>{item.Code}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Strip;
