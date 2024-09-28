// Project files
import PriceTag from "components/price-tag/PriceTag";
import "./price-total.css";

interface Props {
  /** The text to display next to the price. Used to indicate if this item is a unit price, a sub-total, a tax, or the grand total. */

  label: string;
  /** The item price. */
  price: number;
}

export default function PriceTotal({ label, price }: Props) {
  return (
    <div className="price-total">
      <span className="label">{label}:</span>
      <PriceTag price={price} />
    </div>
  );
}
