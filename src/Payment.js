import React, { useState, useEffect } from "react";
import AddAddress from "./AddAddress";
import DeliveryAddress from "./DeliveryAddress";
import "./Payment.css";
import { useHistory } from "react-router-dom";
import axios from "./axios";
import CurrencyFormat from "react-currency-format";
import PaymentDetails from "./PaymentDetails";
import Title from "./Title";
import { getBasketTotal } from "./reducer";
import db from "./firebase";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <h2 className="payment__title">You're almost there...!</h2>
      <div className="payment__container">
        <div className="payment__left">
          <Title title="Delivery Address" />
          <div className="paymentLeft__deliveryAddress">
            <DeliveryAddress
              name={"Hanfried Nguegan"}
              streetAddress={"New Dashmesh Nagar house 217"}
              city={"Jalandhar"}
              pincode={144007}
              phoneNumber={7508226876}
              active
            />
            <DeliveryAddress
              name={"Francis Hanfried"}
              streetAddress={"Lawgate Road Greenview PG"}
              city={"Phagwara"}
              pincode={144005}
              phoneNumber={7508226876}
            />
            <AddAddress />
          </div>

          <Title title={"Payment Method"} />
          <div className="payment__stripe">
            {/* Stripe Magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
        <div className="payment__right">
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
}

export default Payment;
