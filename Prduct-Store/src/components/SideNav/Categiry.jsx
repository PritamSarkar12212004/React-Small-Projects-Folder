import React, { useContext } from "react";
import ProductContext from "../../context/Products/ProductContext";
import { Link } from "react-router-dom";
function Categiry() {
  const { setUrlPath } = useContext(ProductContext);
  return (
    <div className="mt-5  flex flex-col items-start ">
      <div>
        <h1 className="text-2xl">Category Filter</h1>
      </div>
      <div className="flex flex-col gap-3 mt-2 ">
        <Link to="/">
          <button
            onClick={() => setUrlPath("?limit=20")}
            className="px-10 py-1 hover:bg-yellow-400 font-bold bg-yellow-100 rounded-full flex items-center justify-center"
          >
            cat 1
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => setUrlPath("/category/jewelery")}
            className="px-10 py-1 hover:bg-yellow-400 font-bold bg-yellow-100 rounded-full flex items-center justify-center"
          >
            cat 2
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => setUrlPath("?sort=desc")}
            className="px-10 py-1 hover:bg-yellow-400 font-bold bg-yellow-100 rounded-full flex items-center justify-center"
          >
            cat 3
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => setUrlPath("?sort=desc")}
            className="px-10 py-1 hover:bg-yellow-400 font-bold bg-yellow-100 rounded-full flex items-center justify-center"
          >
            cat 4
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categiry;
