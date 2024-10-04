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

  function onChange(value: string) {
    const newValue: number = Number(value);
    const min: boolean = newValue > 1;
    const max: boolean = newValue <= unitsLeft;

    if (min && max) setValue(newValue);
  }

  return (
    <section className="quantity-chooser">
      <div className="content">
        <input
          type="number"
          min={1}
          max={unitsLeft}
          disabled={value === 0}
          value={value}
          onChange={(event) => {
            onChange(event?.target.value);
          }}
        />
        <ButtonCircle icon="minus" onClick={() => removeQuantity()} disabled={value === 1} />
        <ButtonCircle icon="plus" onClick={() => addQuantity()} disabled={value === unitsLeft} />
      </div>
      <small>Units left ×{unitsLeft}</small>
    </section>
  );
}
