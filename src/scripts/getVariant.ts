// Project files
import type ProductOption from "types/ProductOption";

function getVariant(option: ProductOption): string[] | number[] {
  // Properties
  const keysToRemove = ["color", "quantity"];
  const cloneOption = { ...option } as { [key: string]: any };
  let result;

  keysToRemove.forEach((key) => delete cloneOption[key]);
  result = Object.values(cloneOption)[0] || [];

  return result;
}

export default getVariant;
