import React from "react";
import "./Products.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Products({ title, price, id, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="products">
      <div className="products__top">
        <img src={image} alt="" />
      </div>
      <div className="products__middle">
        <div className="products__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="products__info">
          <p className="products__title">{title}</p>
          <p className="products__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
      <div className="products__bottom">
        <Button className="products__addToBasket" onClick={addToBasket}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Products;
