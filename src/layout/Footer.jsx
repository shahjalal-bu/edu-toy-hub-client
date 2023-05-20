import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <img src={logo} alt="EduToyhub" className="h-[90%]" />
          </div>
          <div className="text-lg text-center">
            <p>&copy; 2023 Edutoyhub. All rights reserved.</p>
            <p>123 Banglabazar, Dhaka, Bangladesh</p>
            <p>Email: info@edutoyhub.com</p>
            <p>Phone: +1 234 5678</p>
          </div>
          <div className="flex space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
