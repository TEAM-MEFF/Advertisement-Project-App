import SalesByCategory from "./SalesByCategory";
import MostViewedProduct from "./MostViewedProduct";
import MostPurshased from "./MostPurshased";
import BusinessDetails from "./BusinessDetails";
import UserEvent from "./UserEvent";

const Dashboard = () => {
	return (
		<div>
			<div className="mt-14">
				<div className="grid md:grid-cols-8 bg-inputRing">
					<section className="col-span-6">
						<section className="grid grid-cols-1 md:grid-cols-6">
							<div className="md:grid md:col-span-2">
								<BusinessDetails />
							</div>
							<div className="md:grid md:col-span-4">
								<SalesByCategory />
							</div>
						</section>
						<section className="grid grid-cols-1 md:grid-cols-6">
							<div className="md:grid col-span-6 md:col-span-3">
								<MostViewedProduct />
							</div>
							<div className="md:grid col-span-6 md:col-span-3">
								<MostPurshased />
							</div>
						</section>
					</section>
					<div className="md:col-span-2">
						<UserEvent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
