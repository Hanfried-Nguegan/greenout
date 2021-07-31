import React from "react";
import "./CartItem.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CartItem({ image, id, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <FlipMove>
      <div className="cartItem">
        <div className="cart__itemLeft">
          <img src={image} alt="" className="cartItem__image" />
        </div>
        <div className="cart__itemCenter">
          <div className="cartItem__info">
            <p className="cartItem__title">{title}</p>
            <p className="cartItem__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>

            {!hideButton && (
              <button onClick={removeFromBasket}>Remove from Cart</button>
            )}
          </div>
        </div>
      </div>
    </FlipMove>
  );
}

export default CartItem;
