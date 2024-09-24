// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import type Product from "types/Product";
import ItemProduct from "components/item-product/ItemProduct";

// Properties
const goodProduct: Product = {
  id: 1,
  name: "Sony Playstation 4",
  brand: "Sony",
  available: true,
  weight: 0.5,
  price: "5000",
  options: [],
};
const badProduct: Product = {
  id: 1,
  name: "N-Gage",
  brand: "Nokia",
  available: false,
  weight: 0.5,
  price: "1250",
  options: [],
};

/**
 * This component is wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
export default {
  GoodProduct: (
    <BrowserRouter>
      <ItemProduct item={goodProduct} />
    </BrowserRouter>
  ),
  BadProduct: (
    <BrowserRouter>
      <ItemProduct item={badProduct} />
    </BrowserRouter>
  ),
};
