import React from "react";
import Product from "./Product";

function Products() {
  const ProductData = [
    {
      Compony: "TTR",
      Info: " TTR is a company that provides services in the field of information technology.",
      bgColor:
        " radial-gradient(circle at 1.8% 4.8%, rgb(17, 23, 58) 0%, rgb(58, 85, 148) 90%);",
    },
    {
      Compony: "Air 2022",
      Info: " Air 2022 is a company that provides services in the field of information technology.",
      bgColor:
        " radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)",
    },
    {
      Compony: "Yahoo!",
      Info: " Yahoo! is a company that provides services in the field of information technology.",
      bgColor:
        " radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
    },
    {
      Compony: "Google",
      Info: " Google is a company that provides services in the field of information technology.",
      bgColor:
        " linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)",
    },
    {
      Compony: "xyz Movies",
      Info: " xyz Movies are doing a great job in the field of information technology.",
      bgColor:
        " linear-gradient(178.6deg, rgb(20, 36, 50) 11.8%, rgb(124, 143, 161) 83.8%)",
    },
    {
      Compony: "Youtube",
      Info: "Youtube is a company that provides services in the field of information technology. ",
      bgColor:
        " radial-gradient(circle at -4% -12.9%, rgb(74, 98, 110) 0.3%, rgb(30, 33, 48) 90.2%)",
    },
  ];
  return (
    <div className="w-full mt-10">
      <Product ProductData={ProductData} />
    </div>
  );
}

export default Products;
