import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider, useProducts } from "./contexts/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AosAnimation from "./components/AosAnimation";
import Axios from "./utils/Axios";

function App() {
  return (
    <AosAnimation>
      <ProductProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
          <ToastContainer />
        </AuthProvider>
      </ProductProvider>
    </AosAnimation>
  );
}

export default App;
