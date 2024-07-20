import React, { useContext } from "react";
import Nav from "../SideNav/Nav";
import Product from "../Product/Product";
import ProductContext from "../../context/Products/ProductContext";
import LoadingBar from "../Loading/LoadingBar";

function Home() {
  const { product } = useContext(ProductContext);
  return (
    <>
      {product.length>0 ? (
        <div className="w-full h-screen flex ">
          <Nav />
          <Product />
        </div>
      ) : (
        <LoadingBar />
      )}
    </>
  );
}

export default Home;
