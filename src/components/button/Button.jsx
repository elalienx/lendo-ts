// Node modules
import PropTypes from "prop-types";

// Project files
import FontAwesomeIcon from "../font-awesome/FontAwesomeIcon";
import "./button.css";

Button.propTypes = {
  /** Button contents. */
  label: PropTypes.string.isRequired,

  /** The click handler. */
  onClick: PropTypes.func,

  /** Is the button actionable? */
  disabled: PropTypes.bool,

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix: PropTypes.string,

  /** The icon name from the FontAwesome library. */
  icon: PropTypes.string,
};

export default function Button({ label, onClick, disabled, icon_prefix = "fas", icon }) {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={[icon_prefix, icon]} />}
      {label}
    </button>
  );
}
