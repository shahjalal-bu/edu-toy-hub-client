import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider, useProducts } from "./contexts/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AosAnimation from "./components/AosAnimation";
import GoToTopButton from "./components/GoToTopButton";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <AosAnimation>
          <RouterProvider router={routes} />
          <GoToTopButton />
          <ToastContainer />
        </AosAnimation>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
