// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import ItemProduct from "../../components/item-product/ItemProduct";

// Properties
const goodProduct = {
  id: 1,
  name: "Sony Playstation 4",
  brand: "Sony",
  available: true,
  weight: 0.5,
  price: "5000",
};
const badProduct = {
  id: 1,
  name: "N-Gage",
  brand: "Nokia",
  available: false,
  weight: 0.5,
  price: "1250",
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
