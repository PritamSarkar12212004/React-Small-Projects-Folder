import React from "react";
import Card from "./Card";
function Cards() {
  return (
    <div className="max-w-screen-lg mx-auto flex gap-1">
      <Card
        width={"basis-1/3"}
        head={"Up Next:Culture"}
        head2={"Who we are"}
        foot={"Explore what we do our team"}
        l={true}
        f={false}
        bg={false}
      />
      <Card
        width={"basis-2/3"}
        head={"Up Next:Culture"}
        head2={"Who we are"}
        foot={"Explore what we do our team"}
        l={false}
        f={true}
        bg={true}
      />
    </div>
  );
}

export default Cards;
