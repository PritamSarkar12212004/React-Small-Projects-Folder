import React from "react";
import NavBar from "./components/Nav/NavBar";
import Work from "./components/Work/Work";
import Strips from "./components/Strips/Strips";
import Products from "./components/Product/Products";
import Marquees from "./components/Marquee/Marquees";
import Cards from "./components/Card/Cards";
import Footers from "./components/Footer/Footers";

function App() {
  return (
    <div className="bg-zinc-900 w-full h-full text-white -">
      <NavBar />
      <Work />
      <Strips />
      <Products />
      <Marquees />
      <Cards />
      <Footers/>
    </div>
  );
}

export default App;
