// Project files
import InputRadio from "components/input-radio/InputRadio";

// Properties
const colorOptions = ["red", "green", "blue"];
const storageOptions = ["250", "500", "1000"];
const fakeDefaultState = [-1, () => {}]; // -1 means no selectes
const fakeActiveState = [0, () => {}]; // 0 = activates the first option

export default {
  Default: (
    <InputRadio
      id="color"
      label="Choose your favorite color from this list:"
      state={fakeDefaultState}
      options={colorOptions}
    />
  ),
  Active: (
    <InputRadio
      id="storage"
      label="Choose an storage size that fits your needs:"
      state={fakeActiveState}
      options={storageOptions}
    />
  ),
};
