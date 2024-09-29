// Node modules
import { useState } from "react";

// Project files
import InputRadio from "components/input-radio/InputRadio";

// Properties
const options = ["250", "500", "1000"];

// Decorator
interface Props {
  intialValue: number;
  options: string[];
}

function Decorator({ intialValue, options = [] }: Props) {
  // Local state
  const [index, setIndex] = useState(intialValue);

  return <InputRadio id={"color"} state={[index, setIndex]} options={options} />;
}

export default {
  Default: <Decorator intialValue={-1} options={options} />, // unset by default
  Active: <Decorator intialValue={1} options={options} />, // middle option selected
  NoOptions: <Decorator intialValue={-1} options={[]} />, // empty options on purpose
};
