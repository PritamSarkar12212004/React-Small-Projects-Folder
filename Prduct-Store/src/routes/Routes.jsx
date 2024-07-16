import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Item from "../components/Product/Items/Item";
import Cart from "../components/cart/Cart";

function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={`/product/:id`} element={<Item />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default RoutesPath;
