import { useEffect, useState } from "react";
import { apiGetProducts } from "../Services/products";
import IonIcon from "@reacticons/ionicons";
import ApiGetProduct from "./ApiGetProduct";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ApiProductFetch = () => {
	const [inputValue, setInputValue] = useState("");
	const [apiProducts, setApiProducts] = useState([]);
	const [showGrid, setShowGrid] = useState(true);
	const [loading, setLoading] = useState(false);

	const getProducts = async () => {
		setLoading(false);
		const response = await apiGetProducts({
			productName: { $regex: inputValue },
		});

		setApiProducts(response.data);
		// console.log(response.data);
	};

	useEffect(() => {
		getProducts();
	}, [inputValue]);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="my-2 px-3 sm:px-5 md:px-10 max-w-7xl mx-auto">
			<div
				className={`mx-auto px-1 py-1.5 sm:px-2 sm:py-1.5 md:p-2 sticky top-2 z-20 w-[110px] sm:w-[270px] md:w-[350px] lg:w-[500px] h-fit bg-theme-color shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex items-center transition-all duration-300`}
			>
				<input
					className="outline-none text-xs sm:text-sm lg:text-base bg-transparent w-full text-white font-normal px-1 md:px-2 placeholder:text-sm"
					type="search"
					placeholder="Search for any item... from Groceries, to Appliances, to Furniture..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<IonIcon name="search-outline" className="text-base text-white" />
			</div>
			<div className="flex justify-between pt-8 pb-4 px-3">
				<h1 className="text-xl md:text-2xl lg:text-3xl text-theme-color font-bold uppercase">
					All Products
				</h1>
				<div className="flex md:gap-4 gap-1 items-center">
					<IonIcon
						name="list-outline"
						onClick={() => setShowGrid(false)}
						className={`text-2xl md:text-4xl cursor-pointer ${
							!showGrid ? "text-theme-color" : "text-[#CDE500]"
						}`}
					/>
					<IonIcon
						name="grid-outline"
						onClick={() => setShowGrid(true)}
						className={`text-xl md:text-3xl cursor-pointer ${
							showGrid ? "text-theme-color" : "text-[#CDE500]"
						}`}
					/>
				</div>
			</div>
			<div
				className={`entireSpace ${
					showGrid
						? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
						: "flex flex-col md:grid md:grid-cols-2"
				} gap-4`}
			>
				{apiProducts.map((ad, index) => {
					console.log(`${index}: ${ad.images}`);
					return (
						<Link to={`/product/${ad.id}`}>
							<ApiGetProduct
								id={ad.id}
								images={ad.images}
								productName={ad.productName}
								category={ad.category}
								price={ad.price}
								description={ad.description}
								discountPercentage={ad.discountPercentage}
								discountedPrice={ad.discountedPrice}
								avatar={ad.avatar}
								showGrid={showGrid}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

ApiProductFetch.propTypes = {
	id: PropTypes.number,
	images: PropTypes.string,
	productName: PropTypes.string,
	category: PropTypes.string,
	price: PropTypes.string,
	description: PropTypes.string,
	discountPercentage: PropTypes.string,
	discountedPrice: PropTypes.string,
	avatar: PropTypes.string,
};

export default ApiProductFetch;
