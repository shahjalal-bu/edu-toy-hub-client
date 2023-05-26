import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";

function EditProductproblem() {
  const params = useParams();
  const { categoryData, categoryNames } = useProducts();
  const matechProduct = categoryData?.data.find((el) => el?._id === params.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(matechProduct?.Name);
    setCategory(matechProduct?.Category);
    setPicture(matechProduct?.Picture);
    setPrice(matechProduct?.Price);
    setRating(matechProduct?.Rating);
    setDescription(matechProduct?.Description);
  }, []);

  //handle submit
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Name && (
            <span className="text-red-500">Product name is required</span>
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
            value={picture}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Picture && (
            <span className="text-red-500">Product name is required</span>
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
            value={category}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            Available Quantity:
          </label>
          <input
            id="Qty"
            {...register("Qty", { required: true })}
            type="text"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Qty && (
            <span className="text-red-500">Quantity is required</span>
          )}
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
            {...register("Rating", { required: true })}
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.Rating && (
            <span className="text-red-500">Quantity is required</span>
          )}
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
            {...register("Description", { required: true })}
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default EditProductproblem;
