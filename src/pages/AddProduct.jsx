import React from "react";
import { useForm } from "react-hook-form";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            <option value="action">Action Figures</option>
            <option value="puzzle">Puzzles</option>
            <option value="plush">Plush Toys</option>
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
            htmlFor="quantity"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Available Quantity:
          </label>
          <input
            id="quantity"
            {...register("quantity", { required: true })}
            type="number"
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.quantity && (
            <span className="text-red-500">Quantity is required</span>
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
            id="description"
            {...register("description", { required: true })}
            rows={4}
            className="w-full h-24 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
          {errors.description && (
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
