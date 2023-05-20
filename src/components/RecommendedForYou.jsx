import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Axios from "../utils/Axios";
import GlobalSpinner from "./GlobalSpinner";
import Error from "./Error";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const RecommendedForYou = () => {
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

  useEffect(() => {
    async function doGetRequest() {
      setCategoryData((prev) => ({
        ...prev,
        loading: true,
        error: false,
        data: [],
      }));
      try {
        let res = await Axios.get(`/toys/cat/${selectedCategory}`);
        let data = res.data;
        setCategoryData((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data,
        }));
      } catch (error) {
        setCategoryData((prev) => ({
          ...prev,
          loading: false,
          error: true,
          data: [],
        }));
      }
    }

    doGetRequest();
  }, [selectedCategory]);

  return (
    <>
      <section className="my-10">
        <div className="container px-5 sm:px-20 mx-auto">
          <div className="flex justify-between pt-3 pb-2 border-b-2 border-gray-200 mb-2 items-center">
            <div className="sm:flex items-center sm:gap-20">
              <div className="sm:text-2xl font-bold">Shop By Category</div>
            </div>
            <div>
              <a href="./" className="transition-all hover:text-orange-400">
                View All
              </a>
            </div>
          </div>

          {categoryNames.loading === false && categoryNames.error === false && (
            <Tabs>
              <TabList>
                {categoryNames?.data.map((el, index) => (
                  <Tab key={index} onClick={() => setSelectedCategory(el)}>
                    {el}
                  </Tab>
                ))}
              </TabList>
              {categoryNames?.data.map((el, index) => (
                <TabPanel key={index}>
                  <div className="flex flex-wrap gap-5 items-start justify-start">
                    {categoryData.loading && <GlobalSpinner />}
                    {categoryData.loading === false &&
                      categoryData.error === false &&
                      categoryData?.data.map((el) => (
                        <div
                          className="flex flex-col w-[45%] sm:flex-none sm:w-[13%] bg-gray-100 rounded-2xl"
                          id="product__card"
                        >
                          <div className="bg-gray-300 rounded-2xl p-1 relative flex items-center justify-center cursor-pointer">
                            <img
                              src={el?.Picture}
                              alt={"name"}
                              className="h-[180px] w-[220px] object-fill"
                            />

                            <div
                              className={`cart-btn absolute top-3 right-3 p-1 text-[28px] bg-white rounded-[0.3rem] hover:bg-zinc-800 hover:text-white`}
                              onClick={() => {}}
                            >
                              <AiOutlineShoppingCart />
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="pt-2 flex w-full justify-between">
                              <p className="line-clamp-2 min-h-[3rem]">
                                {el?.Name}
                              </p>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className=" text-[grey]">
                                {
                                  <Rating
                                    style={{ maxWidth: 70 }}
                                    value={Number(el?.Rating)}
                                    readOnly
                                  />
                                }
                              </p>
                              <p className="font-[600] text-lg">{el?.Price}</p>
                            </div>
                            <Link to={`/toy/${el?._id}`}>
                              <button className="bg-slate-900 py-2 px-2 my-2 w-full text-white">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          )}
        </div>
      </section>
    </>
  );
};

export default RecommendedForYou;
