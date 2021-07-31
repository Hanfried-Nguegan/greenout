import React from "react";
import "./PaymentDetails.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function PaymentDetails() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="paymentDetails">
      <div className="paymentDetails__title">
        <h2>Order Details</h2>
      </div>
      <hr />
      <div className="payment__container">
        <div className="paymentDetails__left">
          <p>Price</p>
          <p>Delivery Charges</p>
          <p>Discount Prices</p>
        </div>
        <div className="paymentDetails__right">
          <p className="paymentDetails__rightTotal">
            ${getBasketTotal(basket)}
          </p>
          <p className="paymentDetails__rightDelivery">Free</p>
          <p className="paymentDetails__rightDiscount">$0</p>
        </div>
      </div>
      <hr className="paymentDetails__dotted" />
      <div className="paymentDetails__total">
        <div className="paymentDetails__totalLeft">
          <strong className="paymentDetails__totalAmount">Total Amount</strong>
        </div>
        <div className="paymentDetails__totalRight">
          <strong className="paymentDetails__totalPrice">
            $ {getBasketTotal(basket)}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
