// Project files
import ButtonCircle from "components/button-circle/ButtonCircle";
import "./quantity-chooser.css";

interface Props {
  /** The state controlling the quantity. */
  state: [number, Function];

  /** The maximum ammount of units of this product. Used to set a limit of how many you can choose. */
  availableQuantity: number;
}

export default function QuantityChooser({ state, availableQuantity }: Props) {
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
      <ButtonCircle
        icon="plus"
        onClick={() => addQuantity()}
        disabled={quantity === availableQuantity}
      />
    </p>
  );
}
