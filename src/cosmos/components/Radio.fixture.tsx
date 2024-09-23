// Project files
import Radio from "components/input-radio/Radio";

// Properties
const id = "color";
const fakeState = [1, () => {}];

export default {
  Default: <Radio id={id} index={0} state={fakeState} name="Red" />,
  Active: <Radio id={id} index={1} state={fakeState} name="Blue" />,
};
