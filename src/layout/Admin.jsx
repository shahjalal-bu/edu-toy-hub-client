import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalSpinner from "../components/GlobalSpinner";
import SideNavigation from "../components/SideNavigation";

const Admin = () => {
  //loading stage handle
  const navigation = useNavigation();
  return (
    <div className="px-2">
      {navigation.state === "loading" && <GlobalSpinner />}
      <Navbar />
      <div className="container mx-auto px-5 sm:px-20 my-4">
        <div className="flex gap-x-5">
          <SideNavigation />
          <div className="max-h-[85vh] overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
