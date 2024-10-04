// Node modules
import { useState } from "react";

// Project files
import QuantityChooser from "components/quantity-chooser/QuantityChooser";

// Decorator
function Decorator() {
  // Local state
  const [quantity, setQuantity] = useState(1);

  // Properties
  const unitsLeft = 10;

  return (
    <div>
      <QuantityChooser state={[quantity, setQuantity]} unitsLeft={unitsLeft} />
    </div>
  );
}

export default {
  Default: <Decorator />,
};
