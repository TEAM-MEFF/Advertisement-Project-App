import Fashion from "../../../assets/img/Fashion.jpg";
import Appliances from "../../../assets/img/Appliances.jpg";
import Electronics from "../../../assets/img/Electronics.jpg";
import Groceries from "../../../assets/img/Groceries.jpg";
import Furniture from "../../../assets/img/homeEssentials.webp";
import Health from "../../../assets/img/health.png";

const CategoriesSection = () => {
	return (
		<div className="px-3 sm:px-5 md:px-10 my-10 space-y-2 md:space-y-5 max-w-7xl mx-auto">
			<h2 className="text-xl md:text-2xl lg:text-3xl text-theme-color font-bold uppercase md:px-2">
				Browse Though Our Categories
			</h2>
			<div className="grid grid-cols-3 md:grid-cols-6 w-full h-full gap-2 md:gap-4">
				<div className=" transform transition-transform duration-300 hover:rotate-3">
					<img
						src={Fashion}
						alt=""
						className="w-full h-32 md:h-40 bg-cover bg-no-repeat bg-right relative"
					/>
					<p className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 font-semibold text-sm md:text-base lg:text-lg ">
						Clothing & Fashion
					</p>
				</div>
				<div className=" transform transition-transform duration-300 hover:rotate-3">
					<img
						src={Appliances}
						alt=""
						className="w-full h-32 md:h-40 bg-cover bg-no-repeat bg-right relative"
					/>
					<p className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 font-semibold text-sm md:text-base lg:text-lg ">
						Smart Appliances
					</p>
				</div>
				<div className=" transform transition-transform duration-300 hover:rotate-3">
					<img
						src={Electronics}
						alt=""
						className="w-full h-32 md:h-40 bg-cover bg-no-repeat bg-right relative"
					/>
					<p className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 font-semibold text-sm md:text-base lg:text-lg ">
						Tech & Gadgets
					</p>
				</div>
				<div className=" transform transition-transform duration-300 hover:rotate-3">
					<img
						src={Groceries}
						alt=""
						className="w-full h-32 md:h-40 bg-cover bg-no-repeat bg-right relative"
					/>
					<p className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 font-semibold text-sm md:text-base lg:text-lg ">
						Groceries & More
					</p>
				</div>
				<div className=" transform transition-transform duration-300 hover:rotate-3">
					<img
						src={Health}
						alt=""
						className="w-full h-32 md:h-40 bg-cover bg-no-repeat bg-right relative"
					/>
					<p className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 font-semibold text-sm md:text-base lg:text-lg ">
						Health & Beauty
					</p>
				</div>
				<div className=" transform transition-transform duration-300 hover:rotate-3">
					<img
						src={Furniture}
						alt=""
						className="w-full h-32 md:h-40 bg-cover bg-no-repeat bg-right relative"
					/>
					<p className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 font-semibold text-sm md:text-base lg:text-lg ">
						Home Essentials
					</p>
				</div>
			</div>
		</div>
	);
};

export default CategoriesSection;
