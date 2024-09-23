// Node modules
import PropTypes from "prop-types";

// Project files
import Radio from "./Radio";
import RadioName from "../../propTypes/RadioName";
import "./input-radio.css";

InputRadio.propTypes = {
  /** The unique identifier gropping the radio options. */
  id: PropTypes.string.isRequired,

  /** The title of the radio group the user sees. */
  label: PropTypes.string.isRequired,

  /** The state controlling the input. */
  state: PropTypes.array,

  /** The options of this radio group */
  options: PropTypes.arrayOf(RadioName),
};

export default function InputRadio({ id, label, state, options }) {
  // Components
  const Options = options.map((item, index) => <Radio key={`${id}-${index}`} id={id} index={index} state={state} name={item} />);

  return (
    <div className="input-radio">
      <h3>{label}</h3>
      <div className="options">{Options}</div>
    </div>
  );
}
