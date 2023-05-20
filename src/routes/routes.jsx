import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Terms from "../pages/Terms";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import Blog from "../pages/Blog";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Admin from "../layout/Admin";
import OverView from "../pages/OverView";
import Order from "../pages/Order";
import DealsProduct from "../pages/DealsProduct";
import DiscountProduct from "../pages/DiscountProduct";
import MyProducts from "../pages/MyProducts";
import ViewProduct from "../pages/ViewProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <ViewProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <OverView />,
      },
      {
        path: "myproducts",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "editproduct",
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "allproducts",
        element: <AllProducts />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "deals-of-the-day",
        element: <DealsProduct />,
      },
      {
        path: "discount",
        element: <DiscountProduct />,
      },
      {
        path: "editproduct/:id",
        element: <EditProduct />,
      },
    ],
  },
]);

export default routes;
