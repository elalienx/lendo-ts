import ProductOption from "types/ProductOption";

type variants = string[] | number[];

export default function extractVariant(option: ProductOption, keysToRemove: string[]): variants {
  const cloneOption = { ...option } as { [key: string]: any };
  let result;

  keysToRemove.forEach((key) => delete cloneOption[key]);
  result = Object.values(cloneOption)[0] || [];

  return result;
}
