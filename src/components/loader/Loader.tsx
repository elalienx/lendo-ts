// Project files
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <FontAwesomeIcon icon={["fas", "spinner"]} spin />
    </div>
  );
}
