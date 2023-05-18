import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useProducts } from "../contexts/ProductContext";
import categoriesName from "../utils/categoriesName";

const RecommendedForYou = () => {
  const state = useProducts();
  //take categories name with state
  const categories = categoriesName(state) || {};

  const [selecteCategory, setSelecteCategory] = useState("");
  return (
    <>
      <section className="my-10">
        <div className="container px-5 sm:px-20 mx-auto">
          <div className="flex justify-between pt-3 pb-2 border-b-2 border-gray-200 mb-2 items-center">
            <div className="sm:flex items-center sm:gap-20">
              <div className="sm:text-2xl font-bold">Recendly Added</div>
            </div>
            <div>
              <a href="./" className="transition-all hover:text-orange-400">
                View All
              </a>
            </div>
          </div>
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              {Object.keys(categories).map((el, index) => (
                <Tab
                  key={index}
                  onClick={() => setSelecteCategory(el === "All" ? "" : el)}
                >
                  {el}
                </Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="flex flex-wrap gap-2">
                {state?.products.map((toy) => (
                  <div
                    key={toy._id}
                    className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 sm:flex-none min-w-fit"
                  >
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
                ))}
              </div>
            </TabPanel>
            {Object.keys(categories).map((el, index) => (
              <TabPanel key={index}>
                <div className="flex flex-wrap gap-2">
                  {/* for categoried product  */}
                  {categories[el].map((toy) => (
                    <div
                      key={toy._id}
                      className="relative overflow-hidden bg-gray-400 rounded-lg w-100 shadow-lg flex-1 sm:flex-none  min-w-fit"
                    >
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
                          <span className="block font-semibold">
                            Peace Lily
                          </span>
                          <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $36.00
                          </span>
                        </div>
                        <button className="bg-slate-900 py-2 px-2 my-2 w-full">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default RecommendedForYou;
