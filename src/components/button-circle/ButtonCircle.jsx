// Node modules
import PropTypes from "prop-types";

// Project files
import FontAwesomeIcon from "../font-awesome/FontAwesomeIcon";
import "./button-circle.css";

ButtonCircle.propTypes = {
  /** The icon name from the FontAwesome library. */
  icon: PropTypes.string.isRequired,

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix: PropTypes.string,

  /** The click handler. */
  onClick: PropTypes.func,

  /** Is the button actionable? */
  disabled: PropTypes.bool,
};

export default function ButtonCircle({ icon, icon_prefix = "fas", onClick, disabled }) {
  return (
    <button className="button-circle" disabled={disabled} onClick={onClick}>
      <FontAwesomeIcon icon={[icon_prefix, icon]} />
    </button>
  );
}
