import App from "@/App";
import Dashboard from "@/Layout/Dashboard";
import About from "@/Pages/about/About";
import { Register } from "@/Pages/auth/Register";
import { Signin } from "@/Pages/auth/SignIn";

import AddCar from "@/Pages/admin/AddCar";
import { AllCars } from "@/Pages/admin/AllCars";
import UpdateCar from "@/Pages/admin/UpdateCar";
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
      {
        path: "addCar",
        element: <AddCar></AddCar>,
      },
      {
        path: "edit/:id",
        element: <UpdateCar></UpdateCar>,
      },
      {
        path: "allcars",
        element: <AllCars></AllCars>,
      },
    ],
  },
]);

export default router;
