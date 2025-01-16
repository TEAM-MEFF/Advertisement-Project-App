import ProductFetch from "../components/ProductFetch";
import NavbarResponsive from "../components/NavbarResponsive";
import ApiProductFetch from "../components/ApiProductFetch";
import CategoriesSection from "./user/components/CategoriesSection";
import HeroCarousel from "../components/HeroCarousel";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<div>
			<NavbarResponsive />
			<HeroCarousel />
			<ProductFetch />
			<ApiProductFetch />
			<CategoriesSection />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
