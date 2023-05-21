import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Error";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col h-screen">
        <div className="flex-grow flex flex-col items-center justify-center">
          <img
            src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"
            alt="404"
            className="rounded"
          />

          <p className="text-xl text-gray-600 py-2">Oops! Page not found.</p>
          <Link
            to="/"
            className="mt-8 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
