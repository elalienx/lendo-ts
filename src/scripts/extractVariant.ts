/**
 * Takes care of finding the variant of a product option by removing the other keys.
 * @param {object} option
 * @param {string[]} keysToRemove
 * @returns {string[] | number[]}
 */
export default function extractVariant(option, keysToRemove) {
  const cloneOption = { ...option };
  let result;

  keysToRemove.forEach((key) => delete cloneOption[key]);
  result = Object.values(cloneOption)[0] || [];

  return result;
}
