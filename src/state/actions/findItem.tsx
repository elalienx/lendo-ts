import CartItem from "types/CartItem";

interface Payload {
  /** The id of the product in the inventory.json used to brind the product description and price. */
  productId: number;

  /** The color of a product as as the index to know what variant to use. */
  colorIndex: number;

  /** Specific variant of a prodcut like 250 or 500 GB of storage. */
  variantIndex: number;
}

function findItemIndex(state: CartItem[], payload: Payload): number {
  return -1;
}

export default findItemIndex;
