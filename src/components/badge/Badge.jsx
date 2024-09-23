// Node modules
import PropTypes from "prop-types";

// Project files
import "./badge.css";

Badge.propTypes = {
  /** A number to display in this notification badge. */
  number: PropTypes.number.isRequired,
};

export default function Badge({ number }) {
  const finalNumber = number < 100 ? number : "99+";

  return <div className="badge">{finalNumber}</div>;
}
