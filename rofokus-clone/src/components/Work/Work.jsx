import React from "react";

function Work() {
  const images = [
    {
      url: "https://i.pinimg.com/564x/87/44/5a/87445a528bcfb9b3de6a88069f7df351.jpg",
      top: "50%",
      lef: "50%",
      isactive: false,
    },
    {
      url: "https://i.pinimg.com/564x/42/43/78/4243781bb63431813350c8fa9bfb9552.jpg",
      top: "60%",
      lef: "45%",
      isactive: false,
    },
    {
      url: "https://i.pinimg.com/564x/5f/30/51/5f305115437d98370f3d15cf147f8c6b.jpg",
      top: "47%",
      lef: "60%",
      isactive: false,
    },
    {
      url: "https://i.pinimg.com/564x/db/e9/3f/dbe93fd6b3af1ffb5425737264b0c4d3.jpg",
      top: "60%",
      lef: "40%",
      isactive: false,
    },
    {
      url: "https://i.pinimg.com/564x/5f/30/51/5f305115437d98370f3d15cf147f8c6b.jpg",
      top: "55%",
      lef: "60%",
      isactive: false,
    },
  ];
  return (
    <div className="max-w-screen-lg m-auto flex justify-center items- relative  ">
      <h1 className="text-[30vw] select-none tracking-tight font-semibold leading-none">
        work
      </h1>
      <div className="w-full h-full absolute top-0  ">
        {images.map((item, index) =>
          item.isactive ? (
            <img
              key={index}
              src={item.url}
              alt=""
              className=" absolute -translate-x-[50%] -translate-y-[50%] w-60 h-60 rounded-xl"
              style={{
                top: item.top,
                left: item.lef,
              }}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Work;
