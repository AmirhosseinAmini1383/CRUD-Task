import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <DarkModeProvider>
        <Toaster />
        <Home />
      </DarkModeProvider>
    </ProductsProvider>
  );
}

export default App;
