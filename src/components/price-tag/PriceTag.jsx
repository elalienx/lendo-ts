// Project files
import "./price-tag.css";

PriceTag.propTypes = {
  /** The product price. */
  price: number,
};

/**
 * In the future, currency can be a prop.
 */
export default function PriceTag({ price }) {
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
