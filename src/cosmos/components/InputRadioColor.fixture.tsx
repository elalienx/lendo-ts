// Node modules
import { useState } from "react";

// Project files
import InputRadioColor from "components/input-radio-color/InputRadioColor";

// Properties
const options = ["red", "green", "blue", "yellow", "black", "white", "gray"];

function Decorator({ intialValue }: { intialValue: number }) {
  // Local state
  const [index, setIndex] = useState(intialValue);

  return <InputRadioColor id={"color"} state={[index, setIndex]} options={options} />;
}

export default {
  Default: <Decorator intialValue={-1} />, // unset by default
  Active: <Decorator intialValue={3} />, // middle option selected
};
