// Project files
import RadioColor from "components/input-radio-color/RadioColor";

// Properties
const id = "color";
const fakeState = [1, () => {}];

export default {
  Black: <RadioColor id={id} state={fakeState} index={0} name="black" />,
  Blue: <RadioColor id={id} state={fakeState} index={0} name="blue" />,
  Gray: <RadioColor id={id} state={fakeState} index={0} name="gray" />,
  Green: <RadioColor id={id} state={fakeState} index={0} name="green" />,
  Red: <RadioColor id={id} state={fakeState} index={0} name="red" />,
  White: <RadioColor id={id} state={fakeState} index={0} name="white" />,
  Yellow: <RadioColor id={id} state={fakeState} index={0} name="yellow" />,
  UnknownColor: <RadioColor id={id} state={fakeState} index={0} name="magenta" />,
};
