/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Error from "../components/Error";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password don't match !");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, userName, photoUrl);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err?.message?.replace("Firebase:", "") || "Failed");
    }
  }

  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Register";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-indigo-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">EduToysHub</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Welcome to EduToysHub
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Already have an account?</span>
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <Link to="/terms" className="underline">
              terms
            </Link>
            and
            <a href="#" className="underline">
              conditions
            </a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Register
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                autoFocus={true}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                autoFocus={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="comfirmPassword"
                  className="text-sm font-semibold text-gray-500"
                >
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                id="comfirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="photo"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="text-sm font-semibold text-gray-500"
              >
                Photo Url
              </label>
              <input
                type="text"
                id="photo"
                autoFocus={true}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200 focus:ring-4"
                disabled={loading}
              >
                Register
              </button>
            </div>
            {error && (
              <p className="">
                <Error message={error} />
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
