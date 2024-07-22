import Product1 from "./Product1";
import Product2 from "./Product2";
function Products() {
  return (
    <div className="w-full">
      <Product1
        ImgUri={"Product/tv.png"}
        VideoUrl={"Product/tv.m4v"}
        h1={"Enjoy on your TV"}
        h2={
          "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        }
      />
      <Product2
        ImgUri={"Product/mobile-0819.jpg"}
        extra={true}
        h1={"Download your shows to watch offline"}
        h2={
          "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        }
      />
      <Product1
        ImgUri={"Product/tv.png"}
        VideoUrl={"Product/tv2.m4v"}
        h1={"Enjoy on your TV"}
        h2={
          "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        }
      />
      <Product2
        ImgUri={"Product/kids.png"}
        extra={false}
        h1={"Create profiles for kids"}
        h2={
          "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        }
      />
    </div>
  );
}

export default Products;
