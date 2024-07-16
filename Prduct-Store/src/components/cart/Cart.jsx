import React from "react";
import Nav from "../SideNav/Nav";
import Carts from "./Carts";

function Cart() {
  return (
    <div className="w-full h-screen flex ">
      <Nav />
      <div className="w-[85%] h-screen  p-5 flex  overflow-x-hidden justify-between overflow-y-auto ">
        <Carts />
      </div>
    </div>
  );
}

export default Cart;
