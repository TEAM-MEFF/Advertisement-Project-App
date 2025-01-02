import ShoppingBG from "../assets/img/shoppingBgImage.jpg";

const ContactSection = () => {
	return (
		<section
			className="text-center w-full h-full bg-bottom bg-cover"
			style={{ backgroundImage: `url(${ShoppingBG})` }}
		>
			<div className="mx-auto py-16 px-8 bg-black bg-opacity-70 h-full">
				{/* Left Section - Store Info */}
				<div className="space-y-4 text-white max-w-xl mx-auto ">
					<div className="space-y-4">
						<h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
							Reach Us Anytime
						</h2>
						<p className="text-sm md:text-base text-slate-400">
							Have questions or need support? We’re here to help with your
							orders, deliveries, and everything in between.
						</p>
					</div>
					<div className="space-y-4">
						<div className="w-full group">
							<h3 className="text-base md:text-lg font-semibold mb-1 ">
								Working Hours
							</h3>
							<p className="group-hover:underline text-sm md:text-base group-hover:cursor-pointer text-slate-400">
								Mon - Fri: 8AM – 6PM
							</p>
							<p className="group-hover:underline text-sm md:text-base group-hover:cursor-pointer text-slate-400">
								Sat: 9AM – 4PM
							</p>
							<p className="group-hover:underline text-sm md:text-base group-hover:cursor-pointer text-slate-400">
								Sun: Closed
							</p>
						</div>

						<div className="w-full group">
							<h3 className="text-base md:text-lg font-semibold mb-1 ">
								Customer Support
							</h3>
							<p className="group-hover:underline text-sm md:text-base group-hover:cursor-pointer text-slate-400">
								+233 24 987 6543
							</p>
							<p className="group-hover:underline text-sm md:text-base group-hover:cursor-pointer text-slate-400">
								support@dimedwa.com
							</p>
						</div>

						<div className="w-full group">
							<h3 className="text-base md:text-lg font-semibold mb-1 ">
								Head Office
							</h3>
							<p className="group-hover:underline text-sm md:text-base group-hover:cursor-pointer text-slate-400">
								Block 45, Spintex Road, Accra - Ghana
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
