// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/images/logo.svg";
import ButtonCart from "components/button-cart/ButtonCart";
import "./navigation-bar.css";

interface Props {
  /** The number of items the user has in the shopping cart. */
  number: number;
}

export default function NavigationBar({ number }: Props) {
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
