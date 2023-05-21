import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import { useParams } from "react-router-dom";
import GlobalSpinner from "../components/GlobalSpinner";

const ViewProduct = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function doGetRequest() {
      setLoading(true);
      try {
        let res = await Axios.get(`/toys/${id}`);
        setData(res.data);
        setLoading(false);
        document.title = "EduToysHub |" + res?.data?.Name;
      } catch (error) {
        console.log(error);
      }
    }
    doGetRequest();
    return () => {
      document.title = "EduToysHub";
    };
  }, [id]);
  //render ui
  if (loading) return <GlobalSpinner />;
  else
    return (
      <>
        <div className="container mx-auto my-5 px-5 sm:px-20">
          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <img src={data?.Picture} alt="Product Image" className="w-80" />
            <div className="md:ml-8 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-2">{data?.Name}</h2>
              <p className="text-gray-600">
                Seller: {data?.Seller ? data?.Seller : "Unknown"}
              </p>
              <p className="text-gray-600">
                Seller Email:{" "}
                {data?.SellerEmail ? data?.SellerEmail : "Unknown"}
              </p>
              <p className="text-2xl font-bold mt-4 mb-2">
                Price: {data?.Price}
              </p>
              <p className="text-gray-600">Rating: {data?.Rating}</p>
              <p className="text-gray-600">Available Quantity: {data?.Qty}</p>
              <p className="text-gray-600 mt-4 max-w-lg whitespace-normal">
                Description: {data?.Description}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-1">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
              Add to Cart
            </button>
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </>
    );
};

export default ViewProduct;
