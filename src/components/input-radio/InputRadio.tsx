// Project files
import Radio from "./Radio";
import "./input-radio.css";

interface Props {
  /** The unique identifier gropping the radio options. */
  id: string;

  /** The title of the radio group the user sees. */
  label: string;

  /** The state controlling the input. */
  state: [number, Function];

  /** The options of this radio group */
  options: string[] | number[];
}

export default function InputRadio({ id, label, state, options }: Props) {
  // Components
  const Options = options.map((item, index) => (
    <Radio key={`${id}-${index}`} id={id} index={index} state={state} name={item} />
  ));

  return (
    <div className="input-radio">
      <h3>{label}</h3>
      <div className="options">{Options}</div>
    </div>
  );
}
