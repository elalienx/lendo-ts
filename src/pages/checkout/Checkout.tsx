// Project files
import Button from "components/button/Button";
import EmptyState from "components/empty-state/EmptyState";
import ItemCart from "components/item-cart/ItemCart";
import PriceTag from "components/price-tag/PriceTag";
import { useCart } from "state/CartContext";
import calculateGrandTotal from "scripts/calculateGrandTotal";
import type Product from "types/Product";
import EmptyStateText from "./empty-state-text.json";
import "./checkout.css";

interface Props {
  data: Product[];
}

export default function Checkout({ data }: Props) {
  // Global state
  const { cart } = useCart();

  // Properties
  // Refactor into a separate, testable method
  const matchingProducts: Product[] = cart
    .map((item) => data.find((product) => product.id === item.product_id) || null)
    .filter((product): product is Product => product !== null);
  const grandTotal = calculateGrandTotal(matchingProducts, cart);

  // Safeguards
  if (!cart.length) return <EmptyState item={EmptyStateText} />;

  // Components
  // Refactor: Once we have a better "add-item" we won't need the
  const Items = cart.map((item, index) => (
    <ItemCart key={index} product={matchingProducts[index]} cartItem={item} index={index} />
  ));

  return (
    <div id="checkout" className="page">
      <div className="content-group">
        <h1>Your Cart</h1>
        <small>{cart.length} items in cart</small>
        {Items}
        <section className="grand-total">
          <span className="label">Grand total:</span>
          <PriceTag price={grandTotal} />
        </section>
        <Button icon="cash-register" onClick={() => alert("End of demo 🎉")}>
          Proceed to payment
        </Button>
      </div>
    </div>
  );
}
