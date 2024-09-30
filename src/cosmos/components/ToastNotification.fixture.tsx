// Project files
import ToastNotification from "components/toast-notification/ToastNotification";

// Node modules
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function Decorator() {
  // Methods
  function openToast() {
    toast(<ToastNotification title={"Added to cart"} icon={"bag-shopping"} color={"red"} />);
  }

  return (
    <div>
      <button onClick={openToast}>Open toast</button>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "toaster",
        }}
      />
    </div>
  );
}

export default {
  Default: <Decorator />,
};
