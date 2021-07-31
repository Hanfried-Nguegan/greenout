import React from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";
import RollingPapers from "./RollingPapers";
import Bongs from "./Bongs";
import Grinders from "./Grinders";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Vaporizers from "./Vaporizers";
import Pipes from "./Pipes";

const promise = loadStripe(
  "pk_test_51IfMODSEV9X8jNS1LYd9EpSBXNKMuZOBlCkoh9iBV7CWRfbVoBDzSZPEsr7LNEdbInpVs2Vge29t9l94S3fOWCtF00B4fQycKC"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/pipes">
              <Header />
              <Pipes />
            </Route>
            <Route path="/vaporizers">
              <Header />
              <Vaporizers />
            </Route>
            <Route path="/rolling_papers">
              <Header />
              <RollingPapers />
            </Route>
            <Route path="/grinders">
              <Header />
              <Grinders />
            </Route>
            <Route path="/bongs">
              <Header />
              <Bongs />
            </Route>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
