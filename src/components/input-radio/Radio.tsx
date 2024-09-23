// Project files
import type RadioName from "types/RadioName";
import "./radio.css";

interface Props {
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: string;

  /** The position in the array of this option. */
  index: number;

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  state: [number, Function];

  /** The text to diplay to the user. */
  name: RadioName;
}

export default function Radio({ id, index, state, name }: Props) {
  const [selectedIndex, setSelectedIndex] = state;

  return (
    <label className="radio">
      <input
        type="radio"
        name={id}
        value={index}
        checked={index === selectedIndex}
        onChange={() => setSelectedIndex(index)}
      />
      {name}
    </label>
  );
}
