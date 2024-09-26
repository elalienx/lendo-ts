// Project files
import InputRadio from "components/input-radio/InputRadio";

// Properties
const options = ["250", "500", "1000"];
const fakeDefaultState: [number, Function] = [-1, () => {}]; // -1 means no selectes
const fakeActiveState: [number, Function] = [0, () => {}]; // 0 = activates the first option

export default {
  Default: <InputRadio id="color" state={fakeDefaultState} options={options} />,
  Active: <InputRadio id="storage" state={fakeActiveState} options={options} />,
};
