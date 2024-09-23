// Node modules
import PropTypes from "prop-types";

// Project files
import "./radio-color.css";

RadioColor.propTypes = {
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: PropTypes.string.isRequired,

  /** The position in the array of this option. */
  index: PropTypes.number.isRequired,

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  state: PropTypes.array,

  /** The text to diplay to the user. */
  name: PropTypes.string.isRequired,
};

export default function RadioColor({ id, index, state, name }) {
  const [selectedIndex, setSelectedIndex] = state;

  return (
    <label className="radio-color">
      <div className={`swatch ${name}`}>{/** empty on purpose, design added with CSS */}</div>
      <input type="radio" name={id} value={index} checked={index === selectedIndex} onChange={() => setSelectedIndex(index)} aria-label={name} />
    </label>
  );
}
