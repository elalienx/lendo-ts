// Project files
import Radio from "./Radio";
import "./input-radio.css";

interface Props {
  /** The unique identifier gropping the radio options. */
  id: string;

  /** The state controlling the input. */
  state: [number, Function];

  /** The options of this radio group */
  options: string[] | number[];
}

export default function InputRadio({ id, state, options }: Props) {
  // Safeguard
  if (!options.length) return <small className="text-warning">No options available</small>;

  // Components
  const Options = options.map((item, index) => (
    <Radio key={`${id}-${index}`} id={id} index={index} state={state} name={item} />
  ));

  return <div className="input-radio">{Options}</div>;
}
