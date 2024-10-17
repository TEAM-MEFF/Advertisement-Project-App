import React, { useEffect, useState } from "react";
import RootLayout from "../../layouts/RootLayout";
import CategoriesBar from "./components/CategoriesBar";

const UserHomePage = () => {
  const [categoriesBarToggle, setCategoriesBarToggle] = useState(false);

  useEffect(() => {
    console.log(categoriesBarToggle);
  }, [categoriesBarToggle]);
  return (
    <div>
      <RootLayout headerText="Home Page Home Page">
        <div>
          <CategoriesBar
            categoriesBarToggle={categoriesBarToggle}
            setCategoriesBarToggle={setCategoriesBarToggle}
          />
        </div>
      </RootLayout>
    </div>
  );
};

export default UserHomePage;
