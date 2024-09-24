// Project files
import "./radio-color.css";

interface Props {
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: string;

  /** The position in the array of this option. */
  index: number;

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  state: [number, Function];

  /** The text to diplay to the user. */
  name: string;
}

export default function RadioColor({ id, index, state, name }: Props) {
  const [selectedIndex, setSelectedIndex] = state;

  return (
    <label className="radio-color">
      <div className={`swatch ${name}`}>{/** empty on purpose, design added with CSS */}</div>
      <input
        type="radio"
        name={id}
        value={index}
        checked={index === selectedIndex}
        onChange={() => setSelectedIndex(index)}
        aria-label={name}
      />
    </label>
  );
}
