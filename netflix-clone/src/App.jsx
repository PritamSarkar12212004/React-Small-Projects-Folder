import React from "react";
import Hero from "./components/Hero/Hero";
import Products from "./components/Product/Products";
import Questions from "./components/Question/Questions";
import Footers from "./components/Footer/Footers";
function App() {
  return (
    <div className="w-full h-full bg-zinc-900 text-white ">
      <Hero />
      <Products />
      <Questions />
      <Footers />
    </div>
  );
}

export default App;
