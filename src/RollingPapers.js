import React from "react";
import Products from "./Products";
import "./RollingPapers.css";
import Title from "./Title";

function RollingPapers() {
  return (
    <div className="rollingPapers">
      <div className="rollingPapers__container">
        <Title title={"Rolling Papers"} />
      </div>
      <div className="rollingPapers__row">
        <Products
          id="1"
          title="Raw Classic Masterpiece King Size Rolling Paper"
          price={29}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Raw%20Paper/716165281733%20(1)-228x228.JPG"
        />
        <Products
          id="2"
          title="Juicy J's Blueberry King Size Rolling Paper"
          price={39}
          rating={4}
          image="https://www.littlegoa.com/image/cache/catalog/Juicy%20Jay/716165178750%20(1)-228x228.JPG"
        />
      </div>
      <div className="rollingPapers__row">
        <Products
          id="3"
          title="Hornet Dollar King Size Rolling Paper"
          price={29}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/MIX%20paper/6949235700535%20(2)-228x228.JPG"
        />
        <Products
          id="4"
          title="Juicy J's Buggle Gum King Size Rolling Paper"
          price={19}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Juicy%20Jay/716165201199%20(1)-228x228.JPG"
        />
        <Products
          id="5"
          title="Glass King Size Clear Rolling Paper"
          price={29}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/MIX%20paper/716165171270%20(2)-228x228.JPG"
        />
      </div>
      <div className="rollingPapers__row">
        <Products
          id="6"
          title="Element Connoisseur King Size Rolling Paper"
          price={29}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/Element/716165179894%20(1)-228x228.JPG"
        />
        <Products
          id="7"
          title="Hornets King Size Transparent Rolling Paper"
          price={39}
          rating={4}
          image="https://www.littlegoa.com/image/cache/catalog/MIX%20paper/6958189720551%20(1)-228x228.JPG"
        />
      </div>
      <div className="rollingPapers__row">
        <Products
          id="8"
          title="OCB Premium King Slim Rolling Paper"
          price={19}
          rating={5}
          image="https://www.littlegoa.com/image/cache/catalog/OCB/30107014-228x228.JPG"
        />
        <Products
          id="9"
          title="Juicy J's Cotton Candy King Size Rolling Paper"
          price={39}
          rating={3}
          image="https://www.littlegoa.com/image/cache/catalog/Juicy%20Jay/716165179931%20(1)-228x228.JPG"
        />
        <Products
          id="10"
          title="Rollies Hemp King Size Rolling Paper"
          price={19}
          rating={2}
          image="https://www.littlegoa.com/image/cache/catalog/MIX%20paper/016165123867%20(1)-228x228.JPG"
        />
      </div>
    </div>
  );
}

export default RollingPapers;
