import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
import Overview from "./pages/dashboard/SalesByCategory";
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
import EditProduct from "./components/EditProduct";
import AddProduct from "./components/ApiAddProduct";
import AddProducts from "./components/ApiAddProducts";
import ProductDetailsMawuse from "./components/ProductDetailsMawuse";
import DashboardPage from "./pages/vendorpage/DashboardPage";
import Dashboard from "./pages/dashboard/Dashboard";
import MyStorePage from "./pages/vendorpage/MyStorePage";
// import PostProductPage from "./pages/vendorpage/PostProductPage";
import MainDashboard from "./components/MainDashboard";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/register",
			element: <SignUp />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/cart",
			element: <CartPage />,
		},
		{
			path: "/dashboard",
			element: <MainDashboard />,
			children: [
				{
					index: true,
					// path: "overview",
					element: <Dashboard />,
				},
				{
					path: "store",
					element: <MyStorePage />,
				},
				{
					path: "post",
					element: <AddProduct />,
				},
				{
					path: "settings",
					element: <Settings />,
				},
			],
		},
		{
			path: "/about",
			element: <Dashboard />,
		},
		{
			path: "/addProduct",
			element: <AddProduct />,
		},
		{
			path: "/addProducts",
			element: <AddProducts />,
		},
		{
			path: "/vendordashboard",
			element: <DashboardPage />,
		},
		{
			path: "/vendordashboard/myproducts",
			element: <MyStorePage />,
		},
		{
			path: "/sidebar",
			element: <UserHomePage />,
		},
		{
			path: "/vendorlayout",
			element: <VendorLayout />,
		},
		// {
		//   path: "/product/:id",
		//   element: <ProductDetailsMain />,
		// },
		{
			path: "/product/:id",
			element: <ProductDetailsMawuse />,
		},
		{
			path: "/product/edit/:id",
			element: <EditProduct />,
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
			path: "/main",
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
		// {
		//   path: "/ven",
		//   element: <DashboardLayout />,
		//   children: [
		//     {
		//       index: true,
		//       // path: "overview",
		//       element: <Overview />,
		//     },
		//     {
		//       path: "/product",
		//       element: <ProductDetailsMain />
		//     },
		//     {
		//       path: "/addProduct",
		//       element: <AddProduct />
		//     },
		//     {
		//       path: "/editAd/:id",
		//       element: <EditProduct />
		//     },
		//   ],
		// },
	]);
	return (
		<ShopContextProvider>
			<RouterProvider router={router} />
		</ShopContextProvider>
	);
}

export default App;
