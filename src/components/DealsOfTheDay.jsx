import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";

const DealsOfTheDay = () => {
  const [categoryNames, setCategoryNames] = useState({
    loading: true,
    error: true,
    data: [],
  });
  const [categoryData, setCategoryData] = useState({
    loading: true,
    error: true,
    data: [],
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function doGetRequest() {
      setCategoryNames((prev) => ({
        ...prev,
        loading: true,
        error: false,
        data: [],
      }));
      try {
        let res = await Axios.get("/toys/categorynames");
        let data = res.data;
        setCategoryNames((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data,
        }));
      } catch (error) {
        setCategoryNames((prev) => ({
          ...prev,
          loading: false,
          error: true,
          data: [],
        }));
      }
    }

    doGetRequest();
  }, []);

  console.log(categoryNames);

  return (
    <>
      <section id="deals-of-the-day">
        <div className="container flex gap-5 px-5 py-2 md:py-3 md:px-20 mx-auto">
          <div className="w-2/12 hidden lg:block">
            <div className="flex justify-between pt-3 pb-2 border-b-2 border-gray-200 mb-2 items-center">
              <div className="sm:text-2xl font-bold">All Categories</div>
            </div>
            <ul className="menu bg-gray-100 p-2 rounded-box">
              {categoryNames.loading === false &&
                categoryNames.error === false &&
                categoryNames.data.map((el, index) => (
                  <li key={index}>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      {el}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex justify-between pt-3 pb-2 border-b-2 border-gray-200 mb-2 items-center">
              <div className="sm:flex items-center sm:gap-20">
                <div className="sm:text-2xl font-bold">Deals Of The Day</div>
                <div className="flex sm:gap-5">
                  <div className="mr-2 text-lg font-bold">Ends after:</div>
                  <div className="py-0.5 px-2 bg-orange-400 rounded">
                    <span>10</span>h <span>20</span>m <span>24</span>s
                  </div>
                </div>
              </div>
              <div>
                <a href="./" className="transition-all hover:text-orange-400">
                  View All
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 min-w-fit">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}
                >
                  <rect
                    x="159.52"
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width={152}
                    height={152}
                    rx={8}
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="flex-1 relative pt-8 px-8 flex items-center justify-center">
                  <img
                    className="flex-1 relative w-28"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative text-white px-3 mt-3">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold">Peace Lily</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                  <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealsOfTheDay;
