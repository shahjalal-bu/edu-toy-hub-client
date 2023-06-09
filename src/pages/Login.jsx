/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Error from "../components/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { login, googleSignIn, githubSignIn, currentUser } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(1);
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(0);
      setError("Failed to login");
    }
  }
  //google login
  async function handleGoogleSignIn(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(1);
      await googleSignIn();
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(0);
      setError("Failed to login");
    }
  }
  //github login
  async function handleGithubSignIn(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(1);
      await githubSignIn();
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(0);
      setError("Failed to login");
    }
  }

  //for public route
  if (currentUser) {
    return <Navigate to={from} />;
  }

  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Login";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 w-full lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-slate-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">EdutoyHub</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Welcome to EdutoyHub
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don`t have an account?</span>
            <Link to="/register" className="underline">
              Get Started!
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our
            <a href="#" className="underline">
              terms
            </a>
            and
            <a href="#" className="underline">
              conditions
            </a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
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
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-slate-200"
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
                required={true}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-slate-200"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-slate-500 rounded-md shadow hover:bg-slate-600 focus:outline-none focus:ring-slate-200 focus:ring-4"
                disable={loading}
              >
                Log in
              </button>
            </div>

            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <button
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                  onClick={handleGoogleSignIn}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                    Google
                  </span>
                </button>
              </div>
            </div>
            {error && <Error message={error} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
