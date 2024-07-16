import React, { useContext } from "react";
import ProductContext from "../../context/Products/ProductContext";

function DarkLightThheme() {
  const { theme, settheme } = useContext(ProductContext);
  return (
    <div className="w-full flex justify-start items-start mt-5 px-6  text-white">
      <button
        className={`${
          theme
            ? "bg-zinc-600 px-5 py-2 rounded-xl"
            : "bg-white text-black px-5 py-2 rounded-xl"
        }`}
        onClick={() => settheme(!theme)}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default DarkLightThheme;
