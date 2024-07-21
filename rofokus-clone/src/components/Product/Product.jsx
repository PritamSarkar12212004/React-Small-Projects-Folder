import React, { useState } from "react";
import Button from "../Button/Button";
function Product(prop) {
  const { ProductData } = prop;

  return (
    <div className="w-full">
      {ProductData.map((item, index) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div
            className="w-full"
            style={{ background: isHovered ? item.bgColor : "transparent" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="max-w-screen-lg mx-auto flex justify-between items-center py-16">
              <h1 className="text-4xl">{item.Compony}</h1>
              <div className="w-[30%]">
                <p>{item.Info}</p>
                <div className="gap-2 mt-2 flex ">
                  <Button ButtonValu={"Get Product"} />
                  <Button ButtonValu={"See Detels"} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
