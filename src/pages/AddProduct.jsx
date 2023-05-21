import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Axios from "../utils/Axios";
import { useAuth } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductContext";
import Swal from "sweetalert2";
function AddProduct() {
  const {
    categoryNames,
    myProducts,
    setMyProducts,
    categoryData,
    setSelectedCategory,
    setDataLimit,
  } = useProducts();
  const { currentUser } = useAuth();
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | AddToy";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);
  console.log(currentUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const addProduct = async (formdata) => {
    try {
      const data = {
        ...formdata,
        Seller: currentUser?.displayName,
        SellerEmail: currentUser?.email,
      };
      const response = await Axios.post("/toys", data);
      if (response.status === 200) {
        Swal.fire("Good job!", "Data Added Successfully!", "success");
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (data) => {
    addProduct(data);
  };

  return (
    <div className="container mx-auto px-5 sm:px-20">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 my-2">
          <label
            htmlFor="Name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            id="Name"
            {...register("Name", { required: true })}
            type="text"
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Name && (
            <span className="text-red-500">Toy name is required</span>
          )}
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
            {...register("Picture", { required: true })}
            type="text"
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Picture && (
            <span className="text-red-500">Toy Picture is required</span>
          )}
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
            {...register("Category", { required: true })}
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
          {errors.Category && (
            <span className="text-red-500">Category is required</span>
          )}
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
            {...register("Price", { required: true })}
            type="text"
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Price && (
            <span className="text-red-500">Price is required</span>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 my-2">
          <label
            htmlFor="Qty"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Quantity:
          </label>
          <input
            id="Qty"
            {...register("Qty", { required: true })}
            type="number"
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Qty && (
            <span className="text-red-500">Quantity is required</span>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 my-2">
          <label
            htmlFor="Rating"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rating:
          </label>
          <input
            id="Rating"
            {...register("Rating", { required: true })}
            type="text"
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Rating && (
            <span className="text-red-500">Rating is required</span>
          )}
        </div>
        <div className="w-full px-2">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="Description"
            {...register("Description", { required: true })}
            rows={4}
            className="w-full h-24 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
          {errors.Description && (
            <span className="text-red-500">Description is required</span>
          )}
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

export default AddProduct;
