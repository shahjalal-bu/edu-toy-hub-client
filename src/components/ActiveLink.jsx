import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, className, ...rest }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? "bg-slate-800 text-white" : "") + " " + className
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
