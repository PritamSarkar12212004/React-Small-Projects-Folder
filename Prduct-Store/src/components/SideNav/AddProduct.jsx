import React from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <div>
      <Link to="/cart">
        <button className="bg-blue-400 px-4 py-2 text-white rounded-lg hover:bg-blue-500">
          View Cart
        </button>
      </Link>
    </div>
  );
}

export default AddProduct;
