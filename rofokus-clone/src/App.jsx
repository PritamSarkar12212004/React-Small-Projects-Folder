import React from "react";
import NavBar from "./components/Nav/NavBar";
import Work from "./components/Work/Work";
import Strips from "./components/Strips/Strips";
import Products from "./components/Product/Products";
import Marquees from "./components/Marquee/Marquees";
function App() {
  return (
    <div className="bg-zinc-900 w-full h-full text-white -">
      <NavBar />
      <Work />
      <Strips />
      <Products />
      <Marquees />
    </div>
  );
}

export default App;
