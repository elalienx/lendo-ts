// Project files
import EmptyState from "components/empty-state/EmptyState";
import EmptyStateText from "./empty-state-text.json";
import "./page-404.css";

export default function Page404() {
  return (
    <div id="page-404" className="page">
      <EmptyState item={EmptyStateText} />
    </div>
  );
}
