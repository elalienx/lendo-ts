// Node modules
import { useState } from "react";

// Project files
import InputRadioColor from "components/input-radio-color/InputRadioColor";

// Properties
const options = ["red", "green", "blue", "yellow", "black", "white", "gray"];

// Decorator
interface Props {
  intialValue: number;
  options: string[];
}

function Decorator({ intialValue, options = [] }: Props) {
  // Local state
  const [index, setIndex] = useState(intialValue);

  return <InputRadioColor id={"color"} state={[index, setIndex]} options={options} />;
}

export default {
  Default: <Decorator intialValue={-1} options={options} />, // unset by default
  Active: <Decorator intialValue={3} options={options} />, // middle option selected
  NoOptions: <Decorator intialValue={-1} options={[]} />, // empty options on purpose
};
