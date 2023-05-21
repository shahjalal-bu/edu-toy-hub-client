import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import { Rating } from "@smastrom/react-rating";
import { AiOutlineShoppingCart } from "react-icons/ai";
import GlobalSpinner from "./GlobalSpinner";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
  const [dealsData, setDealsData] = useState({
    loading: true,
    error: true,
    data: [],
  });

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
      setDealsData((prev) => ({
        ...prev,
        loading: true,
        error: false,
        data: [],
      }));
      try {
        let res = await Axios.get("/deals");
        let data = res.data;
        setDealsData((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data,
        }));
      } catch (error) {
        setDealsData((prev) => ({
          ...prev,
          loading: false,
          error: true,
          data: [],
        }));
      }
    }

    doGetRequest();
  }, []);

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
                  <li key={index} data-aos="fade-up">
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
              {/* map */}
              {dealsData.loading && <GlobalSpinner />}
              {dealsData.loading === false &&
                dealsData.error === false &&
                dealsData?.data.map((el) => (
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
                        <p className="line-clamp-2 min-h-[3rem]">{el?.Name}</p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default DealsOfTheDay;
