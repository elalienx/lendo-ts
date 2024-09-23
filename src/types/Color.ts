/**
 * This prop type is needed to handle the edge case where color is received as an array. Example:
 * - normal: "red"
 * - edge case: ["red"]
 */
type Color = string | string[];

export default Color;
