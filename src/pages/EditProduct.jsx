import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import Axios from "../utils/Axios";
import GlobalSpinner from "../components/GlobalSpinner";
import { useAuth } from "../contexts/AuthContext";
import Swal from "sweetalert2";

function EditProduct() {
  const params = useParams();
  const { categoryData, categoryNames } = useProducts();
  const { currentUser } = useAuth();
  console.log(currentUser);
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Picture, setPicture] = useState("");
  const [Price, setPrice] = useState("");
  const [Qty, setQty] = useState("");
  const [Rating, setRating] = useState("");
  const [Description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function doGetRequest() {
      setLoading(true);
      try {
        let res = await Axios.get(`/toys/${params.id}`);

        setLoading(false);
        setName(res?.data?.Name);
        setCategory(res?.data?.Category);
        setPicture(res?.data?.Picture);
        setPrice(res?.data?.Price);
        setQty(res?.data?.Qty);
        setRating(res?.data?.Rating);
        setDescription(res?.data?.Description);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    doGetRequest();
  }, []);
  const updateData = async (event) => {
    event.preventDefault();
    try {
      if (
        Name &&
        Category &&
        Picture &&
        Price &&
        Qty &&
        Rating &&
        Description &&
        currentUser?.displayName &&
        currentUser?.email
      ) {
        const response = await Axios.put(`/toys/${params.id}`, {
          Name,
          Category,
          Picture,
          Price,
          Qty,
          Rating,
          Description,
          Seller: currentUser?.displayName,
          SellerEmail: currentUser?.email,
        });
        if (response.status === 200) {
          Swal.fire("Good job!", "Data updated successfully!", "success");
        }
        //TODO: Perform any additional actions after a successful update
      } else {
        alert("You have to fill all field");
      }
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  if (loading) return <GlobalSpinner />;
  if (!loading)
    return (
      <div className="container mx-auto px-5 sm:px-20">
        <form onSubmit={updateData} className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 my-2">
            <label
              htmlFor="Name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              id="Name"
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 my-2">
            <label
              htmlFor="Picture"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Picture:
            </label>
            <input
              id="Picture"
              type="text"
              value={Picture}
              onChange={(e) => setPicture(e.target.value)}
              className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 my-2">
            <label
              htmlFor="Category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category:
            </label>
            <select
              id="Category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select category</option>
              {!categoryNames.loading &&
                categoryNames.data.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 my-2">
            <label
              htmlFor="Price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price:
            </label>
            <input
              id="Price"
              type="text"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 my-2">
            <label
              htmlFor="Qty"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Available Quantity:
            </label>
            <input
              id="Qty"
              type="text"
              value={Qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 my-2">
            <label
              htmlFor="Qty"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Rating:
            </label>
            <input
              id="Rating"
              type="text"
              value={Rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full px-2">
            <label
              htmlFor="Description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              id="Description"
              rows={4}
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-24 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 w-full text-white px-4 py-2 my-4 mx-auto rounded"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default EditProduct;
