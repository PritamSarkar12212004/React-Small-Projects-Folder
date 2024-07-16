import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";
const ProductContecxtProvider = ({ children }) => {
  const [urlPath, setUrlPath] = useState("");
  const [product, setProduct] = React.useState([]);
  const [recivedData, setRecivedData] = useState([]);

  const [cart, setcart] = useState([]);

  const FetchApiProductData = () => {
    const ApiUrl = `https://fakestoreapi.com/products${urlPath}`;
    axios.get(ApiUrl).then((response) => setProduct(response.data));
  };

  useEffect(() => {
    FetchApiProductData();
  }, [urlPath]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        recivedData,
        setRecivedData,
        setUrlPath,
        cart,
        setcart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContecxtProvider;
