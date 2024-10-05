// Node modules
import { useEffect } from "react";

// Project files
import EmptyState from "components/empty-state/EmptyState";
import EmptyStateText from "./empty-state-text.json";
import "./page-404.css";

export default function Page404() {
  // Methods
  useEffect(() => {
    document.title = "Page not found | Lendo";
  }, []);

  return (
    <div id="page-404" className="page">
      <EmptyState item={EmptyStateText} />
    </div>
  );
}
