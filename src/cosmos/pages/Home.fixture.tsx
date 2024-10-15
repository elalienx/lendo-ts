// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import Home from "pages/home/Home";
import { items } from "data/inventory.json";
import type Product from "types/Product";

// Properties
const noItems: Product[] = [];

/**
 * This page is wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
export default {
  Default: (
    <BrowserRouter>
      <Home data={items} />
    </BrowserRouter>
  ),
  NoProducts: (
    <BrowserRouter>
      <Home data={noItems} />
    </BrowserRouter>
  ),
};
