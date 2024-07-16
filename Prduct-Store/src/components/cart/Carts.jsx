import React, { useContext } from "react";
import ProductContext from "../../context/Products/ProductContext";

function Carts() {
  const { cart, setcart } = useContext(ProductContext);
  return (
    <div className="w-full h-screen flex justify-between flex-wrap">
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return (
            <div className="w-52 h-60 mb-24 flex flex-col mt-10 justify-center items-center rounded-xl">
              <img src={item.image} alt="" />
              <h3 className="text-sm">{item.title}</h3>
              <button className="bg-red-400 hover:bg-red-500 rounded px-3 py-1">
                Remove Cart
              </button>
            </div>
          );
        })
      ) : (
        <div className="w-[85vw] h-screen   flex justify-center items-center rounded-xl">
          <h1 className="text-4xl font-extrabold">Cart is Empty</h1>
        </div>
      )}
    </div>
  );
}

export default Carts;
