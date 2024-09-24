// Project files
import RadioColor from "./RadioColor";
import "./input-radio-color.css";

interface Props {
  /** The unique identifier gropping the radio options. */
  id: string;

  /** The title of the radio group the user sees. */
  label: string;

  /** The state controlling the input. */
  state: [number, Function];

  /** The options of this radio group */
  options: string[];
}

export default function InputRadioColor({ id, label, state, options }: Props) {
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

  return (
    <div className="input-radio-color">
      <h3>{label}</h3>
      <div className="options">{Options}</div>
    </div>
  );
}
