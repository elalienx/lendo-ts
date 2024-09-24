// Node modules
import { Dispatch } from "react";
import toast from "react-hot-toast";

// Project files
import ButtonCircle from "components/button-circle/ButtonCircle";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import PriceTag from "components/price-tag/PriceTag";
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import type CartActions from "types/CartActions";
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

  /** The actions of the cart global state. */
  dispatch: Dispatch<CartActions>;
}

export default function ItemCart({ product, cartItem, index, dispatch }: Props) {
  const { name, options, price } = product;
  const { color_index, selectedQuantity } = cartItem;

  // Properties
  const productOption = options[color_index];
  const quantityAvailable = productOption.quantity;
  const subTotal = Number(price) * selectedQuantity;
  const canRemoveItems = selectedQuantity > 1;
  const canAddItems = selectedQuantity < quantityAvailable;

  // Methods
  function onAdd() {
    dispatch({ type: "add-quantity", payload: { index, option: productOption } });
  }

  function onRemove() {
    dispatch({ type: "remove-quantity", payload: index });
  }

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
        <p className="name">{name}</p>
        <div className="buttons">
          <span>Quantity: {selectedQuantity}</span>
          <ButtonCircle icon="minus" onClick={() => onRemove()} disabled={canRemoveItems} />
          <ButtonCircle icon="plus" onClick={() => onAdd()} disabled={canAddItems} />
          <ButtonCircle icon="trash-can" onClick={() => onDelete()} />
        </div>
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
