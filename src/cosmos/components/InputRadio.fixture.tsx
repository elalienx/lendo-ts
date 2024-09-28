// Node modules
import { useState } from "react";

// Project files
import InputRadio from "components/input-radio/InputRadio";

// Properties
const options = ["250", "500", "1000"];

function Decorator({ intialValue }: { intialValue: number }) {
  // Local state
  const [index, setIndex] = useState(intialValue);

  return <InputRadio id={"color"} state={[index, setIndex]} options={options} />;
}

export default {
  Default: <Decorator intialValue={-1} />, // unset by default
  Active: <Decorator intialValue={1} />, // middle option selected
};
