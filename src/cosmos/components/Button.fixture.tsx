// Project files
import Button from "components/button/Button";

// Properties
const label = "Add to cart";
const icon = "bag-shopping";

export default {
  Normal: (
    <Button icon={icon} disabled={false}>
      {label}
    </Button>
  ),
  Dissabed: (
    <Button icon={icon} disabled={true}>
      {label}
    </Button>
  ),
};
