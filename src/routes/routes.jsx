import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Terms from "../pages/Terms";
import ChefRecipes from "../pages/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import Blog from "../pages/Blog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
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
    ],
  },
  {
    path: "chef",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default routes;
