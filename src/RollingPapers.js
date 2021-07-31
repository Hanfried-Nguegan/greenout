import React, { useState, useEffect } from "react";
import Products from "./Products";
import db from "./firebase";
import "./RollingPapers.css";
import Title from "./Title";

function RollingPapers() {
  const [rollingPapers, setRollingPapers] = useState([]);

  const rollingPaperList = [];

  // useEffect(() => {
  //   const getData = () => {
  //     db.collection("rollingpapers")
  //       .get()
  //       .then((querySnapshot) => {
  //         setRollingPapers(querySnapshot.docs.map((doc) => doc.data()));
  //       });
  //   };

  //   getData();

  //   // db.collection("rollingpapers").onSnapshot((snapshot) => {
  //   //   setRollingPapers(snapshot.docs.map((doc) => doc.data()));
  //   // });
  // }, []);

  useEffect(() => {
    return () => {
      db.collection("rollingpapers")
        .get()
        .then((querySnapshot) => {
          setRollingPapers(querySnapshot.docs.map((doc) => doc.data()));
        });
      setTimeout(() => {
        renderData();
      }, 2000);
    };
  }, [rollingPapers]);

  const renderData = () => {
    let i = 0;
    let rl = rollingPapers.length;
    console.log(rl);
    let two = true;
    while (i < rl) {
      if (rl - i > 1) {
        if (two) {
          rollingPaperList.push(
            <div className="rollingPapers__row">
              {rollingPapers.slice(i, i + 2).map((product) => (
                <Products
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
            </div>
          );
          two = !two;
          i += 2;
        } else {
          rollingPaperList.push(
            <div className="rollingPapers__row">
              {rollingPapers.slice(i, i + 3).map((product) => (
                <Products
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
            </div>
          );
          two = !two;
          i += 3;
        }
      }
    }
    // rollingPaperList.push(
    //   <div className="rollingPapers__row">
    //     <Products
    //       id={rollingPapers[rl - 1].id}
    //       title={rollingPapers[rl - 1].title}
    //       price={rollingPapers[rl - 1].price}
    //       rating={rollingPapers[rl - 1].rating}
    //       image={rollingPapers[rl - 1].image}
    //     />
    //   </div>
    // );
    console.log(rollingPaperList);
  };

  return (
    <div className="rollingPapers">
      <div className="rollingPapers__container">
        <Title title={"Rolling Papers"} />
      </div>

      {console.log(rollingPaperList)}
      {/* {setTimeout(() => {
        renderData();
      }, 1000)} */}
      {renderData()}
      {rollingPaperList.length > 0 ? rollingPaperList : <p>nothing</p>}

      {/* <div className="rollingPapers__row">
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
       */}
    </div>
  );
}

export default RollingPapers;
