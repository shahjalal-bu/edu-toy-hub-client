import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GlobalSpinner from "./GlobalSpinner";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import { useAuth } from "../contexts/AuthContext";
import Swal from "sweetalert2";
const ToyByCategory = () => {
  const { categoryNames, categoryData, setSelectedCategory, setDataLimit } =
    useProducts();
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const handleViewButton = async (id) => {
    if (currentUser) {
      navigate(`/toy/${id}`);
    } else {
      const res = await Swal.fire({
        title: "Are you sure?",
        text: "You have to log in first to view details",
        icon: "warning",
        confirmButtonText: "YES LOGIN",
        showCancelButton: true,
      });
      if (res.isConfirmed) {
        navigate(`/toy/${id}`);
      }
    }
  };
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
                  <div className="flex flex-wrap gap-2 items-start justify-start">
                    {categoryData.loading && <GlobalSpinner />}
                    {categoryData.loading === false &&
                      categoryData.error === false &&
                      categoryData?.data.map((el) => (
                        <div
                          className="flex flex-col w-[48%] sm:flex-none sm:w-[13%] bg-gray-100 rounded-2xl"
                          id="product__card"
                          key={el?._id}
                          data-aos="zoom-in"
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

                            <button
                              className="bg-slate-900 py-2 px-2 my-2 w-full text-white"
                              onClick={() => handleViewButton(el?._id)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          )}
          <div className="flex justify-center">
            <button
              className="bg-slate-900 rounded-sm py-4 px-2 my-2 w-2/6 text-white"
              onClick={() => setDataLimit((prev) => prev + 20)}
            >
              Load More Data
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToyByCategory;
