// Project files
import Badge from "components/badge/Badge";
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import "./button-cart.css";

interface Props {
  /** The number of items the user has in the shopping cart. */
  number: number;
}

/**
 * Note:
 * This is a <div> for easier testing and framework portability.
 * Navigation is handled by the parent component.
 */
export default function ButtonCart({ number }: Props) {
  return (
    <div className="button-cart">
      <FontAwesomeIcon icon={["fas", "bag-shopping"]} />
      <span className="label">Cart</span>
      {number > 0 && <Badge number={number} />}
    </div>
  );
}
