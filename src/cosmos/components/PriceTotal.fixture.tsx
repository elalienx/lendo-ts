// Node modules
import type { ReactNode } from "react";

// Project files
import PriceTotal from "components/price-total/PriceTotal";

// Decorator
interface Props {
  children: ReactNode;
}

function Decorator({ children }: Props) {
  return (
    <div
      className="page"
      style={{ maxWidth: "1200px", width: "100%", display: "grid", placeItems: "center" }}
    >
      {children}
    </div>
  );
}

export default {
  Subtotal: (
    <Decorator>
      <PriceTotal label={"Subtotal"} price={1000} />
    </Decorator>
  ),
  Taxes: (
    <Decorator>
      <PriceTotal label={"Taxes"} price={300} />
    </Decorator>
  ),
  GrandTotal: (
    <Decorator>
      <PriceTotal label={"Grand total"} price={1300} />
    </Decorator>
  ),
};
