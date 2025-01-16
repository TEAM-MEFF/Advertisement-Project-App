import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import MainSidebar from "./MainSidebar";

const MainDashboard = () => {
	return (
		<div>
			<MainNavbar />
			<div className="flex w-full">
				<div className="w-fit">
					<MainSidebar />
				</div>
				<div className="w-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MainDashboard;
