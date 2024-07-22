import React from "react";

function Product1(prop) {
  const { ImgUri, VideoUrl, h1, h2 } = prop;
  return (
    <div className="mt-2 h-[76vh] w-full bg-black   ">
      <div className="max-w-screen-lg m-auto h-full flex justify-between">
        <div className="left w-1/2 h-full flex flex-col justify-center gap-5">
          <h1 className="text-6xl font-extrabold">{h1}</h1>
          <h2 className="text-2xl ">{h2}</h2>
        </div>
        <div className="right w-1/2 h-full flex flex-col justify-center items-center relative">
          <img className=" relative z-50" src={ImgUri} alt="" />
          <video
            className=" absolute w-[75%]  z-40   "
            loop
            autoPlay
            muted
            src={VideoUrl}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Product1;
