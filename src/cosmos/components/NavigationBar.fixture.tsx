// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import NavigationBar from "../../components/navigation-bar/NavigationBar";

// Decorators
function DecoratorRouter({ children }) {
  return (
    <BrowserRouter>
      <div className="page" style={{ maxWidth: "1200px", width: "100%", display: "grid", placeItems: "center" }}>
        {children}
      </div>
    </BrowserRouter>
  );
}

export default {
  NoItemsInCart: (
    <DecoratorRouter>
      <NavigationBar />
    </DecoratorRouter>
  ),
  FewItems: (
    <DecoratorRouter>
      <NavigationBar number={3} />
    </DecoratorRouter>
  ),
  TooManyItems: (
    <DecoratorRouter>
      <NavigationBar number={100} />
    </DecoratorRouter>
  ),
};
