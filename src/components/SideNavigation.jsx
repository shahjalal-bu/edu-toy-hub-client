import React from "react";
import { ImPlus, ImStatsDots } from "react-icons/im";
import { BiShoppingBag } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiDiscount1, CiLogin } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import ActiveLink from "./ActiveLink";

const SideNavigation = () => {
  return (
    <div className=" bg-gray-200 min-h-[85vh]  lg:flex flex-col w-60 hidden">
      <ActiveLink to="">
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          <ImStatsDots /> <p>Overview</p>
        </div>
      </ActiveLink>
      <ActiveLink to="allproducts">
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          <BiShoppingBag /> <p>All Products</p>
        </div>
      </ActiveLink>
      <ActiveLink to="Addproduct">
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          <ImPlus /> <p>Add Products</p>
        </div>
      </ActiveLink>
      <ActiveLink to="order">
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          <FiShoppingBag /> <p>Order</p>
        </div>
      </ActiveLink>
      <ActiveLink to="deals-of-the-day">
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          <MdOutlineLocalOffer /> <p>Deals of the day</p>
        </div>
      </ActiveLink>
      <ActiveLink to="discount">
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          <CiDiscount1 /> <p>Discount</p>
        </div>
      </ActiveLink>
      <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
        <RiContactsLine /> <p>Contact Us</p>
      </div>
      <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
        <CiLogin /> <p>Log out</p>
      </div>
    </div>
  );
};

export default SideNavigation;
