// Node modules
import PropTypes from "prop-types";

// Project files
import FontAwesomeIcon from "../font-awesome/FontAwesomeIcon";
import Badge from "../badge/Badge";
import "./button-cart.css";

ButtonCart.propTypes = {
  /** The number of items the user has in the shopping cart. */
  number: PropTypes.number.isRequired,
};

/**
 * Note:
 * This is a <div> for easier testing and framework portability.
 * Navigation is handled by the parent component.
 */
export default function ButtonCart({ number }) {
  return (
    <div className="button-cart">
      <FontAwesomeIcon icon={["fas", "bag-shopping"]} />
      <span className="label">Cart</span>
      {number > 0 && <Badge number={number} />}
    </div>
  );
}
