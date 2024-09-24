export default interface CartItem {
  /** The id of the product in the inventory.json used to brind the product description and price. */
  product_id: number;

  /** The color of a product as as the index to know what variant to use. */
  color_index: number;

  /** Specific variant of a prodcut like 250 or 500 GB of storage. */
  variant: number;

  /** The amount of units the user decided to purchase. */
  selectedQuantity: number;
}
