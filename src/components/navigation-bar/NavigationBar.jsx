// Node modules
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Project files
import Logo from "../../assets/images/logo.svg";
import ButtonCart from "../button-cart/ButtonCart";
import "./navigation-bar.css";

NavigationBar.propTypes = {
  /** The number of items the user has in the shopping cart. */
  number: number,
};

export default function NavigationBar({ number = 0 }) {
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <img alt="The company logo with the text Shopping Cart" className="logo" src={Logo} />
      </Link>
      <Link to="checkout">
        <ButtonCart number={number} />
      </Link>
    </nav>
  );
}
