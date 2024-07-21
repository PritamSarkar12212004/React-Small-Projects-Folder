import React from "react";

function Marquee(prop) {
  const { ImagesMarquee1, ImagesMarquee2 } = prop;

  return (
    <div className="w-full flex flex-col gap-10  py-20">
      <div className="flex  w-full justify-between gap-10 overflow-hidden">
        {ImagesMarquee1.map((item, index) => {
          return <img key={index} src={item} alt="" className="flex" />;
        })}
      </div>
      <div className="flex  w-full justify-between gap-10 overflow-hidden">
        {ImagesMarquee2.map((item, index) => {
          return <img key={index} src={item} alt="" className="flex" />;
        })}
      </div>
    </div>
  );
}

export default Marquee;
