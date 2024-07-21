import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
function Footers() {
  return (
    <div className="mt-20 max-w-screen-lg mx-auto flex justify-between">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}

export default Footers;
