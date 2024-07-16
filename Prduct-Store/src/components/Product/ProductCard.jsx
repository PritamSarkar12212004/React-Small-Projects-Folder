import React, { useContext } from "react";
import ProductContext from "../../context/Products/ProductContext";
import LoadingBar from "../Loading/LoadingBar";
import { Link, NavLink, Route, Routes } from "react-router-dom";
function ProductCard() {
  const { product } = useContext(ProductContext);

 
  return (
    <>
      {product.length > 0 ? (
        product.map((e, index) => (
          <Link
            to={`/product/${e.id}`}
            key={e.id}
            className="w-[15%] h-[40%] mb-20 overflow-hidden  "
          >
            <img
              className="w-full h-[80%] hover:scale-105"
              src={e.image}
              alt={e.title}
              loading="lazy"
            />
            <p className="text-sm">{`Products`}</p>
            <Link to={`/product/${e.id}`}>View</Link>
          </Link>
        ))
      ) : (
        <LoadingBar />
      )}
    </>
  );
}

export default ProductCard;
