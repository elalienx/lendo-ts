// Project files
import type ProductOption from "./ProductOption";

export default interface Product {
  id: number;

  /** The product name. */
  name: string;

  /** The manufacturer name. */
  brand: string;

  /** The product price as a string. */
  price: string;

  /** To see if the product is available. If not, show a warning and dissable link. */
  available: boolean;

  /** The product weight, could be used in the future to calculate shipping costs. */
  weight: number;

  /** The sub-variants of each product */
  options: ProductOption[];
}
