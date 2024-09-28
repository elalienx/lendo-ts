// Node modules
import type { ReactNode } from "react";

// Project files
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import type IconPrefix from "types/IconPrefix";
import "./button.css";

interface Props {
  /** Button contents. */
  children: ReactNode;

  /** The click handler. */
  onClick?: () => void;

  /** Is the button actionable? */
  disabled?: boolean;

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The icon name from the FontAwesome library. */
  icon: string;
}

export default function Button({ children, onClick, disabled, icon_prefix = "fas", icon }: Props) {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={[icon_prefix, icon]} />}
      {children}
    </button>
  );
}
