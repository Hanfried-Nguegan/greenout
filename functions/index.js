const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51IfMODSEV9X8jNS10MEeiZBZOzxH1jGvofNq2DzTGQVz1mX7FtKRztatmVd9R6kfgJVF1j8DOi5j4m0iRdPEZJnK00KgIRH29J"
);

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/greenout-641e7/us-central1/api
