// Project files
import type ProductOption from "types/ProductOption";

function extractVariant(option: ProductOption, keysToRemove: string[]): string[] | number[] {
  // Properties
  const cloneOption = { ...option } as { [key: string]: any };
  let result;

  keysToRemove.forEach((key) => delete cloneOption[key]);
  result = Object.values(cloneOption)[0] || [];

  return result;
}

export default extractVariant;
