// Project files
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import Color from "types/Color";
import IconPrefix from "types/IconPrefix";
import "./toast-notification.css";

interface Props {
  /** The text to display */
  title: string;

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The icon name from the FontAwesome library. */
  icon: string;

  color: Color;
}
function ToastNotification({ title, icon_prefix = "fas", icon, color = "green" }: Props) {
  return (
    <div className={`toast-notification ${color}`}>
      <FontAwesomeIcon icon={[icon_prefix, icon]} />
      <small className="title">{title}</small>
    </div>
  );
}

export default ToastNotification;
