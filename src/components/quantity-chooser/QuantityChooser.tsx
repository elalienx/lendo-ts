// Project files
import ButtonCircle from "components/button-circle/ButtonCircle";
import "./quantity-chooser.css";

interface Props {
  /** The state controlling the quantity. */
  state: [number, Function];

  /** The maximum ammount of units of this product. Used to set a limit of how many you can choose. */
  unitsLeft: number;
}

export default function QuantityChooser({ state, unitsLeft }: Props) {
  const [value, setValue] = state;

  // Safeguard
  if (unitsLeft === 0) return <small className="text-warning">No units left</small>;

  // Methods
  function addQuantity() {
    if (value < unitsLeft) setValue(value + 1);
  }

  function removeQuantity() {
    if (value > 1) setValue(value - 1);
  }

  function onChange(stringValue: string) {
    const newValue = Number(stringValue);
    const isNumber = !Number.isNaN(newValue);

    if (isNumber) setValue(newValue);
  }

  function onBlur(stringValue: string) {
    const newValue = Number(stringValue);
    const removeZeroes = stringValue.replace(/^0+/, "");

    switch (true) {
      case newValue > unitsLeft:
        return setValue(unitsLeft);

      case newValue < 1:
        return setValue(1);

      default:
        return setValue(removeZeroes);
    }
  }

  return (
    <section className="quantity-chooser">
      <div className="content">
        <input
          type="number"
          max={unitsLeft}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={(event) => onBlur(event.target.value)}
        />
        <ButtonCircle icon="minus" onClick={() => removeQuantity()} disabled={value === 1} />
        <ButtonCircle icon="plus" onClick={() => addQuantity()} disabled={value === unitsLeft} />
      </div>
      <small>Units left ×{unitsLeft}</small>
    </section>
  );
}
