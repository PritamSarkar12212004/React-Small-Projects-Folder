import React from "react";

function Marquee(prop) {
  const { ImagesMarquee1, ImagesMarquee2, ImagesMarquee } = prop;
//   console.log(ImagesMarquee1, ImagesMarquee2);

  return (
    <div className="w-full">
      {ImagesMarquee.map((item, index) => {
          return <marquee>{ console.log(item[0])}</marquee>;
      })}
    </div>
  );
}

export default Marquee;
