// Node modules
import type { ReactNode } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// Project files
import Product from "pages/product/Product";
import { items } from "data/inventory.json";
import { CartProvider } from "state/CartContext";

// Properties
const validId = 1; // first product on the inventory list
const invalidId = 42; // does not exist on the inventory list
const notAvailable = 5; // this product exist but is not available

// Decorators
interface Props {
  element: ReactNode;
  id: number;
}

function DecoratorRouter({ element, id }: Props) {
  return (
    <MemoryRouter initialEntries={[`/path/${id}`]}>
      <CartProvider>
        <Routes>
          <Route path="/path/:id" element={element} />
        </Routes>
      </CartProvider>
    </MemoryRouter>
  );
}

/**
 * This page is wrapped in MagicRouter to simulate reading a variable
 * from the web browser URL address bar, which requires a Router context
 * to function correctly.
 */
export default {
  Default: <DecoratorRouter id={validId} element={<Product data={items} />} />,
  InvalidId: <DecoratorRouter id={invalidId} element={<Product data={items} />} />,
  NotAvailable: <DecoratorRouter id={notAvailable} element={<Product data={items} />} />,
};
