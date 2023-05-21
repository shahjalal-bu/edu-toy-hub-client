import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Terms = () => {
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Terms";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Terms and Conditions</h2>
        <div className="prose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            justo ut risus vulputate consectetur. Vestibulum id iaculis ex, nec
            fermentum neque. Nullam rhoncus turpis at ipsum cursus, et eleifend
            ex euismod.
          </p>

          <p>
            Vivamus volutpat tellus at ex convallis, sit amet posuere sapien
            elementum. Duis porttitor placerat odio, a aliquam nunc interdum at.
            Morbi venenatis mauris nec sapien consequat, non facilisis est
            iaculis.
          </p>
          <br />
          <p>
            Fusce vestibulum malesuada nisi, vitae facilisis erat pulvinar in.
            Nulla eleifend felis elit, in interdum lacus rutrum a. Suspendisse
            potenti. In quis mi vel est tristique iaculis nec in nisi. Mauris
            lobortis dui dolor, sit amet feugiat odio mattis sed.
          </p>
        </div>

        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/register"> Create Account</Link>
        </button>
      </div>
    </div>
  );
};

export default Terms;
