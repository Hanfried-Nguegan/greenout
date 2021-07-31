import React, { useEffect } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { auth, provider } from "./firebase";

function Login() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    document.title = "Login - GreenOut";
  }, []);
  const logIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <img
          src="https://i.pinimg.com/originals/64/41/ee/6441ee69297aa0aa32f3b1a2ac8b820e.png"
          alt=""
        />
        <h3>Welcome to GreenOut</h3>
        <Button onClick={logIn}>Login with Google</Button>
      </div>
    </div>
  );
}

export default Login;
