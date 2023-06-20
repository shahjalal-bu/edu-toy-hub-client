import React from "react";
import { Navigate, Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import GlobalSpinner from "../components/GlobalSpinner";
import SideNavigation from "../components/SideNavigation";
import Navbar from "./Navbar";

const Admin = () => {
  //loading stage handle
  const navigation = useNavigation();
  const location = useLocation();
  if ((location.pathname === "/admin"))
    return <Navigate to="/admin/overview" replace={true} />;
  return (
    <div className="px-2">
      {navigation.state === "loading" && <GlobalSpinner />}
      <Navbar />
      <div className="container mx-auto px-5 sm:px-20 my-4">
        <div className="flex gap-x-5">
          <SideNavigation />
          <div className=" overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
