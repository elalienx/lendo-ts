/**
 * About:
 * This interface is nearly identical to CartItem, except it lacks the selectedQuantity field.
 * It is used specifically to identify a unique combination of product, color, and variant in the cart.
 *
 * While CartItem holds the quantity of an item chosen by the user, SKU serves as a quick reference for
 * distinguishing between similar products with different colors or variants. In commerce, this is known as
 * a Stock Keeping Unit (SKU), which uniquely identifies each specific product variation.
 */
export default interface SKU {
  /** The id of the product in the inventory.json used to brind the product description and price. */
  productId: number;

  /** The color of a product as as the index to know what variant to use. */
  colorIndex: number;

  /** Specific variant of a prodcut like 250 or 500 GB of storage. */
  variantIndex: number;
}
