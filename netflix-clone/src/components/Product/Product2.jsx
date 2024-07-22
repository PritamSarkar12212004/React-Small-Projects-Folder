import React from "react";
import { IoMdCloudDownload } from "react-icons/io";

function Product2(prop) {
  const { ImgUri, extra, h1, h2 } = prop;
  return (
    <div className="mt-2 h-[76vh] w-full bg-black   ">
      <div className="max-w-screen-lg m-auto h-full flex justify-between">
        <div className="right w-1/2 h-full flex flex-col justify-center items-center relative">
          <img className=" relative z-40" src={ImgUri} alt="" />
          {extra ? (
            <div className=" relative top-[-30%] z-50   w-80 h-28 border-2 border-gray-700 rounded-xl bg-black flex px-3 items-center gap-3">
              <img
                className="h-[80%] rounded-md"
                src="Product/boxshot.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">Stranger Things</h1>
                <h2 className="text-blue-500"> Downloading...</h2>
              </div>
              <div className="text-3xl ml-4">
                <IoMdCloudDownload />
              </div>
            </div>
          ) : null}
        </div>
        <div className="left w-1/2 h-full flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-extrabold">{h1}</h1>
          <h2 className="text-2xl ">{h2}</h2>
        </div>
      </div>
    </div>
  );
}

export default Product2;
