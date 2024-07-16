import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductContecxtProvider from "./context/Products/ProductContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContecxtProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContecxtProvider>
);
