// Project files
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import type IconPrefix from "types/IconPrefix";
import "./button-circle.css";

interface Props {
  /** The icon name from the FontAwesome library. */
  icon: string;

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The click handler. */
  onClick?: () => void;

  /** Is the button actionable? */
  disabled?: boolean;
}

export default function ButtonCircle({ icon, icon_prefix = "fas", onClick, disabled }: Props) {
  // Properties
  const accessibleName = `button-${icon}`; // so screen readers can read the button

  return (
    <button
      aria-label={accessibleName}
      className="button-circle"
      disabled={disabled}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={[icon_prefix, icon]} />
    </button>
  );
}
