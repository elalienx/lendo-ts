// Project files
import "./price-tag.css";

interface Props {
  /** The product price. */
  price: number;
}

export default function PriceTag({ price }: Props) {
  // Properties
  const locale = "sv-SE";
  const currency = "SEK";
  const formatedPrice = new Intl.NumberFormat(locale).format(price);

  return (
    <span className="price-tag">
      <span className="price">{formatedPrice}</span>
      <small className="currency">{currency}</small>
    </span>
  );
}
