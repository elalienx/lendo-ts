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
  const { cart, dispatch } = useCart();

  // Properties
  const matchingProducts = cart.map((item) => data.find((product) => product.id === item.id));
  const grandTotal = calculateGrandTotal(matchingProducts, cart);

  // Safeguards
  if (!cart.length) return <EmptyState item={EmptyStateText} />;

  // Components
  const Items = cart.map((item, index) => (
    <ItemCart
      key={index}
      product={matchingProducts[index]}
      item={item}
      index={index}
      dispatch={dispatch}
    />
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
        <Button
          label="Proceed to payment"
          icon="cash-register"
          onClick={() => alert("End of demo 🎉")}
        />
      </div>
    </div>
  );
}
