import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import GlobalSpinner from "../components/GlobalSpinner";
import Error from "../components/Error";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel, MdOutlineLocalOffer } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Axios from "../utils/Axios";

const AllProducts = () => {
  const {
    categoryNames,
    allProducts,
    setallProducts,
    setDataLimit,
    setSelectedCategory,
    setAllProductsLimit,
    setAllProductsQuery,
  } = useProducts();

  const handleDelete = async (id) => {
    try {
      const response = await Axios.delete(`/toys/${id}`);
      console.log(response.data);
      //TODO: froned updated needed
    } catch (error) {
      console.error(error);
    }
  };

  const isDelete = async (id) => {
    const res = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      confirmButtonText: "Delete",
      showCancelButton: true,
    });
    if (res.isConfirmed) {
      handleDelete(id);
    }
  };
  const handleDealsOfTheDay = async (id, dealsOfTheDay) => {
    try {
      const response = await Axios.patch(`toys/deals-of-the-day/${id}`, {
        dealsOfTheDay: true,
      });
      console.log(response.data);
      // Handle response data
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const isDealsOfDay = async (id, dealsOfTheDay) => {
    const res = await Swal.fire({
      title: "Are you sure?",
      text: "You want to deal of the day this product?",
      icon: "warning",
      confirmButtonText: "YES",
      showCancelButton: true,
    });
    if (res.isConfirmed) {
      handleDealsOfTheDay(id, dealsOfTheDay);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Alltoys";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);
  //render to ui

  if (allProducts.loading) return <GlobalSpinner />;
  if (allProducts.error) return <Error message="Error occur" />;
  if (!allProducts.loading && !allProducts.error)
    return (
      <div>
        <div className="flex justify-center py-5">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-square"
                type="submit"
                onClick={() => {
                  setAllProductsQuery(searchQuery);
                }}
              >
                <FaSearch />
              </button>
              {searchQuery && (
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSearchQuery("");
                    setAllProductsQuery("");
                  }}
                >
                  <MdOutlineCancel />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Img</th>
                <th>Seller</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>View</th>
                <th className="text-center">Function</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.data.map((el, index) => (
                <tr key={el?._id}>
                  <th>{index + 1}</th>
                  <td className="overflow-hidden">
                    <span className="inline-block w-40 whitespace-normal">
                      {el?.Name}
                    </span>
                  </td>
                  <td>
                    <img className="w-20 h-16" src={el?.Picture} alt="img" />
                  </td>
                  <td>{el?.Seller}</td>
                  <td className="inline-block w-16 whitespace-normal">{el?.Category}</td>
                  <td>{el?.Price}</td>
                  <td>{el?.Rating}</td>
                  <td>{el?.Qty}</td>
                  <td>
                    <Link to={`/toy/${el?._id}`}>
                      <button className="btn btn-primary btn-sm mx-1">
                        View
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/editproduct/${el?._id}`}>
                      <button className="btn btn-primary btn-sm mx-1">
                        <AiOutlineEdit />
                      </button>
                    </Link>
                    {/* <button
                      className="btn btn-error btn-sm mx-1"
                      onClick={() => isDelete(el?._id)}
                    >
                      <AiOutlineDelete />
                    </button>
                    <button
                      className="btn btn-success btn-sm mx-1"
                      onClick={() => isDealsOfDay(el?._id, el?.dealsOfTheDay)}
                    >
                      <MdOutlineLocalOffer />
                    </button>
                    <button className="btn btn-accent btn-sm mx-1">
                      <CiDiscount1 />
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center">
            <button
              className="bg-slate-900 rounded-sm py-4 px-2 my-2 w-2/6 text-white"
              onClick={() => setAllProductsLimit((prev) => prev + 20)}
            >
              Load More Data
            </button>
          </div>
        </div>
      </div>
    );
};

export default AllProducts;
