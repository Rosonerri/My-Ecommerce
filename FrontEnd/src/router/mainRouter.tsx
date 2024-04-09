import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";
import Layout from "../Block/Layout";
import LoginScreen from "../Pages/LoginScreen";
import DetailPage from "../Pages/DetailPage";
import Cart from "../Pages/Cart/Cart";
import History from "../Pages/History";


export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <Layout />
      // </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: `detail/:imageId`,
        element: <DetailPage />,
      },
      {
        index: true,
        path: "/cart",
        element: <Cart />,
      },
      {
        index: true,
        path: "/history",
        element: <History/>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },

]);