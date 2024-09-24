// Project files
import ButtonCircle from "components/button-circle/ButtonCircle";

// Properties
function onClick() {
  alert("You clicked me!");
}

export default {
  ButtonAdd: <ButtonCircle icon="plus" onClick={onClick} />,
  ButtonRemove: <ButtonCircle icon="minus" onClick={onClick} />,
  ButtonEmptyCartDissabled: <ButtonCircle icon="trash-can" onClick={onClick} disabled />,
};
