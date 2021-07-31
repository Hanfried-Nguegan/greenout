import React from "react";
import "./Cart.css";
import Title from "./Title";
import { useStateValue } from "./StateProvider";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Cart() {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart__left">
        <Title title={"Your Shopping Cart"} />

        {basket.map((item) => (
          <CartItem
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
