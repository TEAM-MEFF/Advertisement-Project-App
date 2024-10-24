import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
import Overview from "./pages/dashboard/Overview";
import Settings from "./pages/dashboard/Settings";
import { useState } from "react";
import UserHomePage from "./pages/user/UserHomePage";
import VendorLayout from "./layouts/VendorLayout";
import ShopContextProvider from "./context/ShopContextProvider";
import VendorDashboard from "./components/VendorDashboard";
import VendorDashboardd from "./layouts/VendorDashboardd";
import CartPage from "./pages/CartPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsMain from "./components/ProductDetailsMain";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/root",
      element: <RootLayout />,
    },
    {
      path: "/sidebar",
      element: <UserHomePage />,
    },
    {
      path: "/vendor",
      element: <VendorLayout />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/products/:id",
      element: <ProductDetailsMain />,
    },
    {
      path: "/vendordash",
      element: <VendorDashboard />,
    },
    {
      path: "/vendordashboard",
      element: <VendorDashboardd />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          // path: "overview",
          element: <Overview />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
