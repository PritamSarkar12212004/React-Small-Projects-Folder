import React from "react";
import Home from "./components/Home/Home";
import ProductContecxtProvider from "./context/Products/ProductContextProvider";
import RoutesPath from './routes/Routes'

function App() {
  return (
    <ProductContecxtProvider>
      <div>
       <RoutesPath/>
      </div>
    </ProductContecxtProvider>
  );
}

export default App;
