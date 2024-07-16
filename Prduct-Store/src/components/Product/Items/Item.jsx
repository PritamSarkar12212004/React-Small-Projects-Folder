import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../../context/Products/ProductContext";
import Nav from "../../SideNav/Nav";
function Item() {
  const { id } = useParams();
  const { product, recivedData, setRecivedData, cart, setcart } =
    useContext(ProductContext);
  useEffect(() => {
    const DataFound = async () => {
      const foundProduct = product.find((e) => e.id === parseInt(id));
      setRecivedData(foundProduct);
    };
    DataFound();
  }, [id, product, setRecivedData]);
  const HandleClik = () => {
    const foundProduct = product.find((e) => e.id === parseInt(id));
    setcart((pre) =>  [...pre, foundProduct]);
  };
  return (
    <div className="w-full h-screen  flex ">
      <Nav />

      <div className="w-[85%] h-screen flex flex-col items-center justify-center">
        <img className="h-[60%]   rounded-xl" src={recivedData?.image} alt="" />
        <h3 className="text-sm opacity-100 text-center">
          {recivedData?.title}
        </h3>
        <button
          className="bg-orange-500  text-white rounded  py-2 px-1 mt-3"
          onClick={() => HandleClik()}
        >
          Add TO Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
