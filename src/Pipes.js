import React from "react";
import "./Pipes.css";
import Title from "./Title";
import Products from "./Products";

function Pipes() {
  return (
    <div className="pipes">
      <div className="pipes__container">
        <Title title={"Pipes"} />
      </div>
      <div className="pipes__row">
        <Products
          id="23"
          title="12 Cm Color Glass Tobacco Smoking Pipe"
          price={200}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20pipe/GP04-228x228.JPG"
        />
        <Products
          id="24"
          title="14 Cm 6 Shooter Fancy Metal Pipe"
          price={150}
          rating={4}
          image="https://www.littlegoa.com/image/cache/catalog/Metal%20Pipe/FMTP%20(1)-228x228.JPG"
        />
      </div>
      <div className="pipes__row">
        <Products
          id="25"
          title="6 Cm Duck Design Color Figure Glass Pipe"
          price={200}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20pipe/FGP-50-228x228.JPG"
        />
        <Products
          id="26"
          title="7 Pipe High-Tech Twisty Glass Blunt"
          price={125}
          rating={3}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20Pipe%20BLunt/7PPHT%20(1)-228x228.JPG"
        />
        <Products
          id="27"
          title="8 Cm Double Mint Metal Pipe"
          price={100}
          rating={2}
          image="https://www.littlegoa.com/image/cache/catalog/Metal%20Pipe/MP08-228x228.JPG"
        />
      </div>
      <div className="pipes__row">
        <Products
          id="28"
          title="Glass Owl Shape Design Pipe"
          price={150}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20pipe/FGP-02-228x228.JPG"
        />
        <Products
          id="29"
          title="Inside Spiral Premium Smoking Glass Pipe"
          price={100}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20pipe/GP-365%20(1)-228x228.JPG"
        />
      </div>
      <div className="pipes__row">
        <Products
          id="30"
          title="12 Cm Color Glass Decorative Smoking Pipe"
          price={200}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20pipe/GP17-228x228.JPG"
        />
        <Products
          id="31"
          title="10cm Inside Glass Chillum Smoking Pipe"
          price={125}
          rating={3}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20pipe/GP-301-228x228.JPG"
        />
        <Products
          id="32"
          title="12Cm Inside Color Glass Pipe"
          price={100}
          rating={2}
          image="https://www.littlegoa.com/image/cache/catalog/Glass%20pipe/GP-492-228x228.JPG"
        />
      </div>
    </div>
  );
}

export default Pipes;
