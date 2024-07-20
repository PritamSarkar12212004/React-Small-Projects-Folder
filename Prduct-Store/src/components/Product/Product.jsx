import React, { useContext } from "react";
import ProductCard from "../Product/ProductCard";
import ProductContext from "../../context/Products/ProductContext";
import LoadingBar from "../Loading/LoadingBar";
function Product() {
  const { product } = useContext(ProductContext);
  return (
    <div className="w-[85%] h-full   px-3 py-10 flex flex-wrap justify-between overflow-y-auto ">
      {product.length>0 ? <ProductCard /> : <LoadingBar />}
    </div>
  );
}

export default Product;
