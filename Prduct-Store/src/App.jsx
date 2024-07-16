import RoutesPath from "./routes/Routes";
import ProductContext from "./context/Products/ProductContext";
import { useContext } from "react";

function App() {
  const { theme, settheme } = useContext(ProductContext);

  console.log(theme);
  return (
    <div className={`${theme ? "bg-White" : "bg-zinc-700"}`}>
      <RoutesPath />
    </div>
  );
}

export default App;
