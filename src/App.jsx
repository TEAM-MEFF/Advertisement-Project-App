import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Overview from "./pages/dashboard/SalesByCategory";
import Settings from "./pages/dashboard/Settings";
import ShopContextProvider from "./context/ShopContextProvider";
import VendorDashboard from "./components/VendorDashboard";
import VendorDashboardd from "./layouts/VendorDashboardd";
import CartPage from "./pages/CartPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductDetailsMain from "./components/ProductDetailsMain";
import EditProduct from "./components/EditProduct";
import AddProduct from "./components/ApiAddProduct";
import ProductDetailsMawuse from "./components/ProductDetailsMawuse";
import Dashboard from "./pages/dashboard/Dashboard";
import MyStorePage from "./pages/vendorpage/MyStorePage";
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
			path: "/product/:id",
			element: <ProductDetailsMawuse />,
		},
		{
			path: "/product/edit/:id",
			element: <EditProduct />,
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
		// {
		//   path: "/product/:id",
		//   element: <ProductDetailsMain />,
		// },
		{
			path: "/vendordash",
			element: <VendorDashboard />,
		},
		{
			path: "/vendordashboard",
			element: <VendorDashboardd />,
		},
		{
			path: "overrview",
			element: <Overview />,
		},
		{
			path: "/addProduct",
			element: <AddProduct />,
		},
		{
			path: "/editAd/:id",
			element: <EditProduct />,
		},
	]);
	return (
		<ShopContextProvider>
			<RouterProvider router={router} />
		</ShopContextProvider>
	);
}

export default App;
