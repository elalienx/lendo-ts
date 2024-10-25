// Node modules
import toast from "react-hot-toast";

// Project files
import ButtonCircle from "components/button-circle/ButtonCircle";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import Notification from "components/toast-notification/ToastNotification";
import PriceTag from "components/price-tag/PriceTag";
import getVariant from "scripts/getVariant";
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import "./item-cart.css";
import cartStore from "state/cartStore";

/**
 * Refactor:
 * Once we improve the add-item where we do add the item to the same product rather to as another one, we don't need the index
 */
interface Props {
  /** The position of a product inside the cart array, used for the dispatcher. */
  index: number;

  /** A specific product matching the cart item */
  product: Product;

  /** The cart item containing the product id, color, variant, and quantity selected. */
  cartItem: CartItem;
}

export default function ItemCart({ product, cartItem, index }: Props) {
  const { name, options, price } = product;
  const { colorIndex, variantIndex, selectedQuantity } = cartItem;

  // Global state
  const increaseQuantity = cartStore((state) => state.increaseQuantity);
  const decreaseQuantity = cartStore((state) => state.decreaseQuantity);
  const deleteItem = cartStore((state) => state.deleteItem);

  // Properties
  const productOption = options[colorIndex];
  const quantityAvailable = productOption.quantity;
  const color = productOption.color;
  const extractedVariant = getVariant(productOption)[variantIndex];
  const variant = extractedVariant ? ` | ${extractedVariant}` : "";
  const details = color + variant;
  const subTotal = Number(price) * selectedQuantity;
  const buttonMinusIsEnabled = selectedQuantity === 1;
  const buttonAddIsEnabled = selectedQuantity >= quantityAvailable;
  const totalQuantity = `Quantity: ${selectedQuantity}/${productOption.quantity}`;

  // Methods
  function onAddQuantity() {
    increaseQuantity(index, productOption);
  }

  function onRemoveQuantity() {
    decreaseQuantity(index);
  }

  function onDelete() {
    toast(<Notification title={"Deleted item from cart"} icon={"trash-can"} color={"red"} />);
    deleteItem(index);
  }

  return (
    <article className="item-cart">
      <ImageThumbnail image={""} alt={""} />
      <div className="item-group">
        <div className="product">
          <p>{name}</p>
          <small>{details}</small>
        </div>
        <div className="buttons">
          <span>{totalQuantity}</span>
          <ButtonCircle icon="minus" onClick={onRemoveQuantity} disabled={buttonMinusIsEnabled} />
          <ButtonCircle icon="plus" onClick={onAddQuantity} disabled={buttonAddIsEnabled} />
          <ButtonCircle icon="trash-can" onClick={onDelete} />
        </div>
      </div>
      <PriceTag price={subTotal} />
    </article>
  );
}
