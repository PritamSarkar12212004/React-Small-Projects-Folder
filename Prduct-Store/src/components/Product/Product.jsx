import React from "react";
import ProductCard from "../Product/ProductCard";

function Product() {
  return (
    <div className="w-[85%] h-full  px-3 py-10 flex flex-wrap justify-between overflow-y-auto ">
      <ProductCard />
    </div>
  );
}

export default Product;
