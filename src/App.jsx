import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AosAnimation from "./components/AosAnimation";

function App() {
  return (
    <AosAnimation>
      <FavoriteProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
          <ToastContainer />
        </AuthProvider>
      </FavoriteProvider>
    </AosAnimation>
  );
}

export default App;
