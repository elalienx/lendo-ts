# Lendo Shopping Cart

This is the TypeScript version of the Lendo Shopping Cart exercise. [View demo](https://lendo-ts.web.app)

For the full explanation, see the original [project](https://github.com/elalienx/lendo-shopping-cart). This repository covers only the new additions.

⚠️ **Note:** The Product page is **intentionally** missing as it will be rebuilt to improve the add-to-cart feature and refactor the code.

## Installation

⚠️ **Note:** This project uses the faster [PNPM](https://pnpm.io) (notice the P) instead of Node Package Manager (NPM withouth P) this allows for faster installations but require one extra step on first time usage.

1. Install PNPM: `npm install -g pnpm`.
1. Install dependencies: `pnpm install` (notice the P)
1. Run the project: `npm run dev`

## Planned

1. Add end to end test with Playwright. (Playwright goes first to know if the Redux change, breaks anything)
1. Use Redux instead of ContextAPI to see if it reduces unncecerary re-renders.

## Done

1. Migrated to TypeScript.
1. Add an enhanced add to cart feature.
1. Add Testing Library Test to Product page to hanlde products with no variant.
1. Improve `<CartItem>` userfulness by mentioning the selected color and variant.
1. Create a new, enhanced Product page to avoid `useEffect()`
1. Improve `<InputRadio>` for variants by using proposed design in Sketch.
1. Improve `<CartItem>` design by putting the quantiy next to the text, instead of below on desktop as there is space on the side.
1. Improve `<QuantityChooser>` by adding an input number.
1. Add Biome linter.
1. Add state to input radio fixture.
1. Add Checkout fixture page.

## Cancelled

1. Create custom toast notification to reduce dependencies: I changed my mind, the library is only 5kb and it has the feature of stacking multiple notifications. Ideal for the Checkout page where you can remove multiple items at the same time.
