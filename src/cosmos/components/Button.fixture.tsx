// Project files
import Button from "components/button/Button";

// Properties
const label = "Add to cart";
const icon = "bag-shopping";

export default {
  Normal: <Button label={label} icon={icon} />,
  Dissabed: <Button label={label} icon={icon} disabled />,
};
