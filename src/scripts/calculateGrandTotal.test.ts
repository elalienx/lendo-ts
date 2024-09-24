// Node modules
import { expect, test } from "vitest";

// Project files
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import calculateGrandTotal from "./calculateGrandTotal";

// test, shows an error if the ammount of matching products does not equal the ammount of items in the cart

test("Shows an error if the ammount of products does not match the amount of items in the cart", () => {
  // Arrange
  const matchingProducts: Product[] = [
    {
      id: 1,
      name: "Philips hue bulb",
      brand: "Philips",
      price: "500",
      available: true,
      weight: 0.2,
      options: [
        {
          color: "white",
          power: [6.5, 9.5],
          quantity: 3,
        },
        {
          color: "red",
          power: [6.5, 9.5],
          quantity: 7,
        },
      ],
    },
    {
      id: 3,
      name: "Playstation 4",
      brand: "Sony",
      price: "5000",
      available: true,
      weight: 2.1,
      options: [
        {
          color: ["black"],
          storage: ["250", "500", "1000"],
          quantity: 10,
        },
        {
          color: ["white"],
          storage: ["250", "500"],
          quantity: 3,
        },
      ],
    },
  ];
  const cart: CartItem[] = [{ product_id: 1, color_index: 0, variant: 0, selectedQuantity: 3 }]; // only 1 item when there should be 2
  const result = "There is a mismatch between the amount of products and items in the cart.";

  // Act
  const test = () => calculateGrandTotal(matchingProducts, cart);

  // Assert
  expect(test).toThrowError(result);
});

test("Correctly calculates the grand total of 1 quantity of 1 product in the shopping cart", () => {
  // Arrange
  const matchingProducts: Product[] = [
    {
      id: 1,
      name: "Philips hue bulb",
      brand: "Philips",
      price: "500",
      available: true,
      weight: 0.2,
      options: [
        {
          color: "white",
          power: [6.5, 9.5],
          quantity: 3,
        },
        {
          color: "red",
          power: [6.5, 9.5],
          quantity: 7,
        },
      ],
    },
  ];
  const cart: CartItem[] = [{ product_id: 1, color_index: 0, variant: 0, selectedQuantity: 1 }]; // product: Philips hue bulb, price: 500, color: white, variant (power): 6.5, quantity: 1
  const result = 500;

  // Act
  const test = calculateGrandTotal(matchingProducts, cart);

  // Assert
  expect(test).toBe(result);
});

test("Correctly calculates the grand total of 3 quantity of 1 product in the shopping cart", () => {
  // Arrange
  const matchingProducts: Product[] = [
    {
      id: 1,
      name: "Philips hue bulb",
      brand: "Philips",
      price: "500",
      available: true,
      weight: 0.2,
      options: [
        {
          color: "white",
          power: [6.5, 9.5],
          quantity: 3,
        },
        {
          color: "red",
          power: [6.5, 9.5],
          quantity: 7,
        },
      ],
    },
  ];
  const cart: CartItem[] = [{ product_id: 1, color_index: 0, variant: 0, selectedQuantity: 3 }]; // product: Philips hue bulb, price: 500, color: white, variant (power): 6.5, quantity: 3
  const result = 1500; // because we are buying the same product 3 times, and it cost 500 per unit.

  // Act
  const test = calculateGrandTotal(matchingProducts, cart);

  // Assert
  expect(test).toBe(result);
});

test("Correctly calculates the grand total of several products in the shopping cart", () => {
  // Arrange
  const matchingProducts: Product[] = [
    {
      id: 1,
      name: "Philips hue bulb",
      brand: "Philips",
      price: "500",
      available: true,
      weight: 0.2,
      options: [
        {
          color: "white",
          power: [6.5, 9.5],
          quantity: 3,
        },
        {
          color: "red",
          power: [6.5, 9.5],
          quantity: 7,
        },
      ],
    },
    {
      id: 3,
      name: "Playstation 4",
      brand: "Sony",
      price: "5000",
      available: true,
      weight: 2.1,
      options: [
        {
          color: ["black"],
          storage: ["250", "500", "1000"],
          quantity: 10,
        },
        {
          color: ["white"],
          storage: ["250", "500"],
          quantity: 3,
        },
      ],
    },
    {
      id: 5,
      name: "Bluetooth speaker",
      brand: "JBL",
      price: "800",
      available: false,
      weight: 0.5,
      options: [
        {
          color: ["black"],
          quantity: 15,
        },
        {
          color: ["white"],
          quantity: 0,
        },
        {
          color: ["red"],
          quantity: 1,
        },
      ],
    },
  ];
  const cart: CartItem[] = [
    { product_id: 1, color_index: 0, variant: 0, selectedQuantity: 3 }, //   500 x 3 =  1,500
    { product_id: 5, color_index: 0, variant: 1, selectedQuantity: 2 }, // 5,000 x 2 = 10,000
    { product_id: 2, color_index: 1, variant: 1, selectedQuantity: 1 }, //   800 x 1 =    800
  ];
  const result = 12300; // 1,500 + 10,000 + 800

  // Act
  const test = calculateGrandTotal(matchingProducts, cart);

  // Assert
  expect(test).toBe(result);
});
