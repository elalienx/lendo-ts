// Project files
import ButtonCart from "components/button-cart/ButtonCart";

export default {
  EmptyCart: <ButtonCart number={0} />, // Should not display the number
  NormalCart: <ButtonCart number={3} />,
  FullCart: <ButtonCart number={10} />, // Should display 9+ instead
};
