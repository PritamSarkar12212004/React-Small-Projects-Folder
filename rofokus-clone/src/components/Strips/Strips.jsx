import React from "react";
import Strip from "./Strip";

function Strips() {
  const StripData = [
    { name: "Google.com", Code: "1" },
    { name: "Youtube.com", Code: "36" },
    { name: "Amazon.com", Code: "55" },
    { name: "zomato.com", Code: "99" },
    { name: "hp.com", Code: "22" },
  ];
  return (
    <div className="w-full mt-16">
      <Strip StripData={StripData} />
    </div>
  );
}

export default Strips;
