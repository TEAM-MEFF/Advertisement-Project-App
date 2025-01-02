import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-blue-200 text-theme-color py-6">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 md:gap-8 items-start">
					{/* Section 1 - Logo and About */}
					<div className="md:col-span-3">
						<div className="content-center items-center md:mt-2">
							<Link to="/">
								<span className="bg-theme-color text-sm md:text-base px-2 md:px-3 py-1 md:py-2 text-white font-bold content-center text-center">
									Di Me🛒
								</span>
								<span
									href="#"
									className="px-1 md:px-2 py-0.5 md:py-1.5 text-sm md:text-base text-theme-color content-center hover:bg-theme-color hover:text-white border-theme-color border-2 text-center font-bold"
								>
									DWA🛍️
								</span>
							</Link>
						</div>
						<p className="mt-2 md:mt-4 text-sm italic">
							Your one-stop destination for premium shopping experiences. We
							bring convenience, quality, and reliability to your doorstep.
						</p>
					</div>
					<div className="md:col-span-1">
						<h3 className="text-lg text-nowrap font-semibold md:mb-4">
							Quick Links
						</h3>
						<ul className="md:space-y-1">
							<li>
								<Link to="/" className="hover:underline text-sm md:text-base">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/shop"
									className="hover:underline text-sm md:text-base"
								>
									Shop
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="hover:underline text-sm md:text-base"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:underline text-sm md:text-base"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="md:col-span-1">
						<h3 className="text-lg font-semibold md:mb-4">Support</h3>
						<ul className="md:space-y-1">
							<li>
								<Link
									to="/faq"
									className="hover:underline text-sm md:text-base"
								>
									FAQs
								</Link>
							</li>
							<li>
								<Link
									to="/returns"
									className="hover:underline text-sm md:text-base"
								>
									Returns
								</Link>
							</li>
							<li>
								<Link
									to="/policy"
									className="hover:underline text-sm md:text-base"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="hover:underline text-sm md:text-base"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
					<div className="md:col-span-3">
						<h3 className="text-lg font-semibold md:mb-4">Stay Updated</h3>
						<p className="mt-1 md:mt-4 text-sm italic">
							Subscribe to our newsletter for exclusive deals and the latest
							updates.
						</p>
						<form className="mt-4 flex">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full px-4 py-2 md:py-3 rounded-l-lg focus:ring-2 text-theme-color focus:ring-theme-color focus:outline-none "
							/>
							<button className="bg-theme-color px-5 py-2 md:py-3 rounded-r-lg text-white hover:bg-[#0e345ade] ring-2 ring-theme-color transition">
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-12 border-t  border-theme-color border-opacity-40 pt-6 flex flex-col md:flex-row justify-between text-sm">
					<p>&copy; 2024 Di Me Dwa.</p>
					<p>All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link to="#" className="hover:underline text-sm md:text-base">
							Facebook
						</Link>
						<Link to="#" className="hover:underline text-sm md:text-base">
							Instagram
						</Link>
						<Link to="#" className="hover:underline text-sm md:text-base">
							Twitter
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
