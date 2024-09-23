import toast from "react-hot-toast";

// Project files
import ButtonCircle from "components/button-circle/ButtonCircle";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import NotAvailable from "components/not-available/NotAvailable";
import PriceTag from "components/price-tag/PriceTag";
import type Product from "types/Product";
import "./item-cart.css";

interface Props {
  /** A specific product matching the cart item */
  product: Product;

  /** The cart item containing the product id, color, variant, and quantity selected. */
  item: {
    /** The id of the product in the inventory.json used to brind the product description and price. */
    id: number;

    /** The color of a product as as the index to know what variant to use. */
    color: number;

    /** Specific variant of a prodcut like 250 or 500 GB of storage. */
    variant: number;

    /** The amount of units the user decided to purchase. */
    quantity: number;
  };

  /** The position inside the cart array, used for the dispatcher. */
  index: number;

  /** The actions of the cart global state. */
  dispatch: Function;
}

export default function ItemCart({ product, item, index, dispatch }: Props) {
  const { color, quantity } = item;

  // Safeguards
  if (!product) return <NotAvailable />;

  // Properties
  const option = product.options[color]; // color acts as index
  const quantityAvailable = option.quantity;
  const subTotal = Number(product.price) * quantity;
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
      <ImageThumbnail image={""} alt={""} />

      {/* Middle */}
      <div className="text-group">
        <p className="name">{product.name}</p>
        <div className="buttons">
          Quantity: {quantity}
          <ButtonCircle
            icon="minus"
            onClick={() => dispatch({ type: "remove-quantity", payload: index })}
            disabled={buttonMinusIsEnabled}
          />
          <ButtonCircle
            icon="plus"
            onClick={() => dispatch({ type: "add-quantity", payload: { index, option } })}
            disabled={buttonAddIsEnabled}
          />
          <ButtonCircle icon="trash-can" onClick={() => onDelete()} />
        </div>
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
