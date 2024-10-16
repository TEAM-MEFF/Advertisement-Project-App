import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-around fixed left-0 bg-red-200 w-24">
      <div>Avatar</div>
      <div>User Details</div>
      <div>Socials</div>
    </div>
  );
};

export default Sidebar;
