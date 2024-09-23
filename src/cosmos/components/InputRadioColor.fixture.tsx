// Project files
import InputRadioColor from "../../components/input-radio-color/InputRadioColor";

// Properties
const colorOptions = ["red", "green", "blue", "yellow", "black", "white", "gray"];
const fakeDefaultState = [-1, () => {}]; // -1 means no selectes
const fakeActiveState = [0, () => {}]; // 0 = activates the first option

export default {
  Default: <InputRadioColor id="color" label="Choose color:" state={fakeDefaultState} options={colorOptions} />,
  Active: <InputRadioColor id="color" label="Choose color" state={fakeActiveState} options={colorOptions} />,
};
