// Project files
import ToastNotification from "components/toast-notification/ToastNotification";

// Node modules
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Color from "types/Color";
import IconPrefix from "types/IconPrefix";

// Decorator
interface Props {
  /** The text to display */
  title: string;

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The icon name from the FontAwesome library. */
  icon: string;

  color: Color;
}

function Decorator({ title, icon, color }: Props) {
  // Methods
  function openToast() {
    toast(<ToastNotification title={title} icon={icon} color={color} />);
  }

  return (
    <div>
      <button onClick={openToast}>Open {title}</button>
      <Toaster position="bottom-right" toastOptions={{ className: "toaster" }} />
    </div>
  );
}

export default {
  Default: <Decorator title={"Added to cart"} icon={"bag-shopping"} color={"green"} />,
  Red: <Decorator title={"Deleted"} icon={"tash-can"} color={"red"} />,
};
