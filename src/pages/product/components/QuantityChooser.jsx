// Node modules
import PropTypes from "prop-types";

// Project files
import ButtonCircle from "../../../components/button-circle/ButtonCircle";
import "./quantity-chooser.css";

QuantityChooser.propTyes = {
  /** The state controlling the quantity. */
  state: PropTypes.array.isRequired,

  /** The maximum ammount of units of this product. Used to set a limit of how many you can choose. */
  availableQuantity: PropTypes.number.isRequired,
};

export default function QuantityChooser({ state, availableQuantity }) {
  const [quantity, setQuantity] = state;

  // Methods
  function addQuantity() {
    if (quantity < availableQuantity) setQuantity(quantity + 1);
  }

  function removeQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <p className="quantity-chooser">
      Quantity: {quantity}
      <ButtonCircle icon="minus" onClick={() => removeQuantity()} disabled={quantity === 1} />
      <ButtonCircle icon="plus" onClick={() => addQuantity()} disabled={quantity === availableQuantity} />
    </p>
  );
}
