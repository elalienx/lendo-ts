// Project files
import type CartItem from "types/CartItem";
import type SKU from "types/SKU";

function findItemIndex(state: CartItem[], payload: SKU): number {
  const { productId, colorIndex, variantIndex } = payload;

  // Properties
  const result = state.findIndex(
    (item) =>
      item.productId === productId &&
      item.colorIndex === colorIndex &&
      item.variantIndex === variantIndex
  );

  return result;
}

export default findItemIndex;
