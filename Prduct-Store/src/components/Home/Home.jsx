import React from "react";
import Nav from "../SideNav/Nav";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="w-full h-screen flex ">
      <Nav />
      <Product />
    </div>
  );
}

export default Home;
