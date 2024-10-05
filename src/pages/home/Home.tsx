// Node modules
import { useEffect } from "react";

// Project files
import ItemProduct from "components/item-product/ItemProduct";
import EmptyState from "components/empty-state/EmptyState";
import type Product from "types/Product";
import EmptyStateText from "./empty-state-text.json";
import "./home.css";

interface Props {
  data: Product[];
}

export default function Home({ data }: Props) {
  // Safeguards
  if (!data.length) return <EmptyState item={EmptyStateText} />;

  // Components
  const Items = data.map((item) => <ItemProduct key={item.id} item={item} />);

  // Methods
  useEffect(() => {
    document.title = "Our products | Lendo";
  }, []);

  return (
    <div id="home" className="page">
      <h1>Our products</h1>
      <section className="grid">{Items}</section>
    </div>
  );
}
