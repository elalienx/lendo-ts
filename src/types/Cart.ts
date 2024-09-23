export default interface Cart {
  /** The id of a product. */
  product_id: number;

  /** The index of a product option. Color acts the index. */
  color_index: number;

  /** The index of the variant. */
  variant: number;

  /** The quantity the user decided to buy. Must be less or equal to the total available in the inventory. */
  quantity: number;
}
