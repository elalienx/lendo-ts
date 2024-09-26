# Lendo Shopping Cart

This is the TypeScript version of the Lendo Shopping Cart exercise. [View demo](https://lendo-ts.web.app)

For the full explanation, see the original [project](https://github.com/elalienx/lendo-shopping-cart). This repository covers only the new additions.

⚠️ **Note:** The Product page is **intentionally** missing as it will be rebuilt to improve the add-to-cart feature and refactor the code.

## Planed improvements

1. Migrated to TypeScript. ✅ DONE
1. Create a new, enhanced Product page to avoid `useEffect()` ✅ DONE
1. Add an enhanced add to cart feature. ⌛️ IN PROGRESS
1. Match the original Sketch design. (see original project for more info)

## Bonus features

1. Use Redux instead of ContextAPI to see if it reduces unncecerary re-renders.
1. Create custom toast notification to reduce dependencies.
1. Add Biome linter.

## Pending

1. Add Checkout fixture page.
1. Improve `<QuantityChooser>` by adding a input number.
1. Improve `<InputRadio>` for variants by using proposed design in Sketch.
1. Improve `<CartItem> by putting the quantiy next to the text, instead of below on desktop as there is space on the side.
1. Improve `<CartItem> by mentioning the selected color and variant.
