# Lendo Shopping Cart

This is the TypeScript version of the Lendo Shopping Cart exercise. [View demo](https://lendo-ts.web.app)

For the full explanation, see the original [project](https://github.com/elalienx/lendo-shopping-cart). This repository covers only the new additions.

⚠️ **Note:** The Product page is **intentionally** missing as it will be rebuilt to improve the add-to-cart feature and refactor the code.

## Installation

⚠️ **Note:** This project uses the faster [PNPM](https://pnpm.io) (notice the P) instead of Node Package Manager (NPM withouth P) this allows for faster installations but require one extra step on first time usage.

1. Install PNPM: `npm install -g pnpm`.
1. Install dependencies: `pnpm install` (notice the P)
1. Run the project: `npm run dev`

## Planed improvements

1. Add an enhanced add to cart feature. ⌛️ IN PROGRESS
1. Match the original Sketch design. (see original project for more info)
1. Migrated to TypeScript. ✅ DONE
1. Create a new, enhanced Product page to avoid `useEffect()` ✅ DONE

## Bonus features

1. Use Redux instead of ContextAPI to see if it reduces unncecerary re-renders.
1. Add Biome linter. ✅ DONE
1. ~Create custom toast notification to reduce dependencies.~ ❌ I CHANGED MY MIND. The libraty is only 5kb and it has a nice little feature of allowing to stack multiple notifications. Ideal for the Checkout page where you can remove multiple items in a short ammount of time.

## Pending

1. Improve `<QuantityChooser>` by adding an input number.
1. Improve `<CartItem>` userfulness by mentioning the selected color and variant.
1. Improve `<CartItem>` design by putting the quantiy next to the text, instead of below on desktop as there is space on the side. ✅ DONE
1. Improve `<InputRadio>` for variants by using proposed design in Sketch. ✅ DONE
1. Add state to input radio fixture. ✅ DONE
1. Add Checkout fixture page. ✅ DONE
