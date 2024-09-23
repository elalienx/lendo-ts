// Node modules
import PropTypes from "prop-types";

// Project files
import RadioColor from "./RadioColor";
import "./input-radio-color.css";

InputRadioColor.propTypes = {
  /** The unique identifier gropping the radio options. */
  id: PropTypes.string.isRequired,

  /** The title of the radio group the user sees. */
  label: PropTypes.string.isRequired,

  /** The state controlling the input. */
  state: PropTypes.array,

  /** The options of this radio group */
  options: PropTypes.arrayOf(PropTypes.string),
};

export default function InputRadioColor({ id, label, state, options }) {
  // Components
  const Options = options.map((item, index) => (
    <RadioColor key={`${id}-radio-color-${index}-${item}`} id={id} index={index} state={state} name={item} />
  ));

  return (
    <div className="input-radio-color">
      <h3>{label}</h3>
      <div className="options">{Options}</div>
    </div>
  );
}
