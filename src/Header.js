import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logged Out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <h2 className="header__greenout"> GREENOUT </h2>
        </div>
      </Link>

      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search ..." />
      </div>
      <div className="header__right">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <p className="header__displayName">
          <span className="header__greetings">Hello</span> {user?.displayName}
        </p>
        <Link to="/cart">
          <div className="header__shoppingCart">
            <ShoppingCartIcon className="header__cart" />
            <span className="header__cartLength">{basket?.length}</span>
          </div>
        </Link>

        <div className="header__logout">
          <h3>Logout</h3>
          <ExitToAppIcon className="header__logoutButton" onClick={logOut} />
        </div>
      </div>
    </div>
  );
}

export default Header;
