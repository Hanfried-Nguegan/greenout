import React from "react";
import Title from "./Title";
import "./Bongs.css";
import Products from "./Products";

function Bongs() {
  return (
    <div className="bongs">
      <div className="bongs__container">
        <Title title={"Bongs"} />
      </div>
      <div className="bongs__row">
        <Products
          id="11"
          title="8 Inch Diffuser Color Glass Bong"
          price={200}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Diffuser%20Bong/GHWP525-228x228.JPG"
        />
        <Products
          id="12"
          title="18 Inch Scorpion Design Diffuser Glass Bong"
          price={150}
          rating={4}
          image="https://www.littlegoa.com/image/cache/catalog/Diffuser%20Bong/GHWP-559-228x228.jpg"
        />
      </div>
      <div className="bongs__row">
        <Products
          id="13"
          title="14 inch Zig-Zag Single Percolator Glass Bong"
          price={200}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Percolator%20Bong/GHWP-509-228x228.JPG"
        />
        <Products
          id="14"
          title="12 inch Color Single Percolator Glass Ice Bong"
          price={125}
          rating={3}
          image="https://www.littlegoa.com/image/cache/catalog/Percolator%20Bong/GHWP-29%20(3)-228x228.JPG"
        />
        <Products
          id="15"
          title="18 Inch Chamber With Honey Comb Glass Bong"
          price={100}
          rating={2}
          image="https://www.littlegoa.com/image/cache/catalog/Honey%20comb/GHWP-82%20(1)-228x228.JPG"
        />
      </div>
      <div className="bongs__row">
        <Products
          id="16"
          title="20 Inch Glass Multi Sticker Bong"
          price={150}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/20%20inch%20glass/20GBS%20(2)-228x228.jpg"
        />
        <Products
          id="17"
          title="18 Inch Color Missile Diffuser Glass Bong"
          price={100}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Diffuser%20Bong/GHWP-568-228x228.jpg"
        />
      </div>
    </div>
  );
}

export default Bongs;
