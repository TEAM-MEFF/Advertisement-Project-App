import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
import Overview from "./pages/dashboard/Overview";
import Settings from "./pages/dashboard/Settings";
import CategoriesBar from "./pages/user/components/CategoriesBar";
import { useState } from "react";
import UserHomePage from "./pages/user/UserHomePage";

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
      path: "/categoriesBar",
      element: <UserHomePage />,
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
  return <RouterProvider router={router} />;
}

export default App;
