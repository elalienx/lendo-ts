// Project files
import InputRadioColor from "components/input-radio-color/InputRadioColor";

// Properties
const colorOptions = ["red", "green", "blue", "yellow", "black", "white", "gray"];
const fakeDefaultState: [number, Function] = [-1, () => {}]; // -1 means no selectes
const fakeActiveState: [number, Function] = [0, () => {}]; // 0 = activates the first option

export default {
  Default: <InputRadioColor id="color" state={fakeDefaultState} options={colorOptions} />,
  Active: <InputRadioColor id="color" state={fakeActiveState} options={colorOptions} />,
};
