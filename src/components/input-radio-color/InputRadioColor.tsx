// Project files
import RadioColor from "./RadioColor";
import "./input-radio-color.css";

interface Props {
  /** The unique identifier gropping the radio options. */
  id: string;

  /** The state controlling the input. */
  state: [number, Function];

  /** The options of this radio group */
  options: string[];
}

export default function InputRadioColor({ id, state, options }: Props) {
  // Safeguard
  if (!options.length) return <small className="text-warning">No options available</small>;

  // Components
  const Options = options.map((item, index) => (
    <RadioColor
      key={`${id}-radio-color-${index}-${item}`}
      id={id}
      index={index}
      state={state}
      name={item}
    />
  ));

  return <div className="input-radio-color">{Options} </div>;
}
