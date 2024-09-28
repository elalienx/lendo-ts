// Node modules
import toast from "react-hot-toast";

// Project files
import ButtonCircle from "components/button-circle/ButtonCircle";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import PriceTag from "components/price-tag/PriceTag";
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import extractVariant from "scripts/extractVariant";
import { useCart } from "state/CartContext";
import "./item-cart.css";

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
  const { dispatch } = useCart();

  // Properties
  const productOption = options[colorIndex];
  const quantityAvailable = productOption.quantity;
  const colorText = `Color: ${productOption.color}`;
  const extractedVariant = extractVariant(productOption, ["color", "quantity"])[variantIndex];
  const variantText = extractedVariant ? ` | Variant: ${extractedVariant}` : "";
  const details = colorText + variantText;
  const subTotal = Number(price) * selectedQuantity;
  const buttonMinusIsEnabled = selectedQuantity === 1;
  const buttonAddIsEnabled = selectedQuantity >= quantityAvailable;
  const totalQuantity = `Quantity: ${selectedQuantity}/${productOption.quantity}`;

  // Methods
  function onAddQuantity() {
    dispatch({ type: "increase-quantity", payload: { index, productOption } });
  }

  function onRemoveQuantity() {
    dispatch({ type: "decrease-quantity", payload: index });
  }

  function onDelete() {
    const toastStyle = { backgroundColor: "#e70d5a", color: "white" };

    toast("Deleted item from cart", { position: "bottom-right", style: toastStyle });
    dispatch({ type: "delete-item", payload: index });
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
