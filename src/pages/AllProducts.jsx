import React from "react";
import { useProducts } from "../contexts/ProductContext";
import GlobalSpinner from "../components/GlobalSpinner";
import Error from "../components/Error";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { categoryData, setDataLimit } = useProducts();
  console.log(categoryData);
  const isDelete = async () => {
    const res = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      confirmButtonText: "Delete",
      showCancelButton: true,
    });
    if (res.isConfirmed) {
      //TODO:delete operation here
    }
  };
  //render to ui

  if (categoryData.loading) return <GlobalSpinner />;
  if (categoryData.error) return <Error message="Error occur" />;
  if (!categoryData.loading && !categoryData.error)
    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Img</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>View Details</th>
              <th className="text-center">Function</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.data.map((el, index) => (
              <tr key={el._id}>
                <th>{index + 1}</th>
                <td className="overflow-hidden">
                  <span className="inline-block w-40 whitespace-normal">
                    {el.Name}
                  </span>
                </td>
                <td>
                  <img className="w-16 h-16" src={el.Picture} alt="img" />
                </td>
                <td>{el.Category}</td>
                <td>{el.Price}</td>
                <td>{el.Rating}</td>
                <td>{el.Qty}</td>
                <td>
                  <Link to={`/toy/${el._id}`}>
                    <button className="btn btn-primary btn-sm mx-1">
                      View Detail
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/admin/editproduct/${el._id}`}>
                    <button className="btn btn-primary btn-sm mx-1">
                      <AiOutlineEdit />
                    </button>
                  </Link>
                  <button
                    className="btn btn-error btn-sm mx-1"
                    onClick={isDelete}
                  >
                    <AiOutlineDelete />
                  </button>
                  <button className="btn btn-success btn-sm mx-1">
                    <MdOutlineLocalOffer />
                  </button>
                  <button className="btn btn-accent btn-sm mx-1">
                    <CiDiscount1 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            className="bg-slate-900 rounded-sm py-4 px-2 my-2 w-2/6 text-white"
            onClick={() => setDataLimit((prev) => prev + 20)}
          >
            Load More Data
          </button>
        </div>
      </div>
    );
};

export default AllProducts;
