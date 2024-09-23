// Project files
import type Color from "./Color";

export default interface ProductOption {
  /** The color of the product. */
  color: Color;

  /** An optional parameter of certain products */
  power?: number[];

  /** An optional parameter of certain products */
  storage?: string[];

  /** The ammount of units available */
  quantity: number;
}
