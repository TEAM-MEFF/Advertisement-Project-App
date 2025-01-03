import Sidebar from "../../components/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import ApiProductFetch from "../../components/ApiProductFetch";
import ApiGetProduct from "../../components/ApiGetProduct";

const MyStorePage = () => {
	return (
		<div>
			<ApiProductFetch />
		</div>
	);
};

export default MyStorePage;
