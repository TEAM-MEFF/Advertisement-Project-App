import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./user/UserHome";
import About from "./pages/About";
import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
import Overview from "./pages/dashboard/Overview";
import Settings from "./pages/dashboard/Settings";

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
