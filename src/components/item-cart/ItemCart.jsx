// Node modules
import PropTypes from "prop-types";
import toast from "react-hot-toast";

// Project files
import Product from "../../propTypes/Product";
import ImageThumbnail from "../image-thumbnail/ImageThumbnail";
import NotAvailable from "../not-available/NotAvailable";
import ButtonCircle from "../button-circle/ButtonCircle";
import PriceTag from "../price-tag/PriceTag";
import "./item-cart.css";

ItemCart.propTypes = {
  /** A specific product matching the cart item */
  product: Product.item.isRequired,

  /** The cart item containing the product id, color, variant, and quantity selected. */
  item: PropTypes.shape({
    /** The id of the product in the inventory.json used to brind the product description and price. */
    id: PropTypes.number.isRequired,

    /** The color of a product as as the index to know what variant to use. */
    color: PropTypes.number.isRequired,

    /** Specific variant of a prodcut like 250 or 500 GB of storage. */
    variant: PropTypes.number.isRequired,

    /** The amount of units the user decided to purchase. */
    quantity: PropTypes.number.isRequired,
  }).isRequired,

  /** The position inside the cart array, used for the dispatcher. */
  index: PropTypes.number.isRequired,

  /** The actions of the cart global state. */
  dispatch: PropTypes.func.isRequired,
};

export default function ItemCart({ product, item, index, dispatch }) {
  const { color, quantity } = item;

  // Safeguards
  if (!product) return <NotAvailable />;

  // Properties
  const option = product.options[color]; // color acts as index
  const quantityAvailable = option.quantity;
  const subTotal = product.price * quantity;
  const buttonMinusIsEnabled = quantity === 1;
  const buttonAddIsEnabled = quantity >= quantityAvailable;

  // Methods
  function onDelete() {
    const toastStyle = { backgroundColor: "#e70d5a", color: "white" };

    toast("Deleted item from cart", { position: "bottom-right", style: toastStyle });
    dispatch({ type: "delete-item", payload: index });
  }

  return (
    <article className="item-cart">
      {/* Left */}
      <ImageThumbnail />

      {/* Middle */}
      <div className="text-group">
        <p className="name">{product.name}</p>
        <div className="buttons">
          Quantity: {quantity}
          <ButtonCircle icon="minus" onClick={() => dispatch({ type: "remove-quantity", payload: index })} disabled={buttonMinusIsEnabled} />
          <ButtonCircle icon="plus" onClick={() => dispatch({ type: "add-quantity", payload: { index, option } })} disabled={buttonAddIsEnabled} />
          <ButtonCircle icon="trash-can" onClick={() => onDelete()} />
        </div>
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
