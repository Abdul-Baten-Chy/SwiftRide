import App from "@/App";
import AddProducts from "@/components/AddProduct";
import UpdateProduct from "@/components/UpdateProduct";
import Dashboard from "@/Layout/Dashboard";
import About from "@/Pages/about/About";
import { Register } from "@/Pages/auth/Register";
import { Signin } from "@/Pages/auth/SignIn";

import Cart from "@/Pages/Cart";
import CheckOut from "@/Pages/CheckOut";
import DetailsPage from "@/Pages/DetailsPage";
import Error from "@/Pages/error/Error";
import Home from "@/Pages/Home/Home";
import ProductMgt from "@/Pages/ProductMgt";
import Products from "@/Pages/products/Products";
import { MyBooking } from "@/Pages/user/MyBooking";
import { Profile } from "@/Pages/user/Profile";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/edit/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/productMgt",
        element: <ProductMgt></ProductMgt>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/signIn",
        element: <Signin></Signin>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "myBookings",
        element: <MyBooking></MyBooking>,
      },
    ],
  },
]);

export default router;
