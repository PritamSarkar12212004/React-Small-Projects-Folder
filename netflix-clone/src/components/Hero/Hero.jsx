import React from "react";
import Navs from "../Nav/Navs";
import Slogans from "../Slogan/Slogans";
function Hero() {
  return (
    <div
      className="w-full h-screen ] "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('Background/Background.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navs />
      <Slogans />
    </div>
  );
}

export default Hero;
