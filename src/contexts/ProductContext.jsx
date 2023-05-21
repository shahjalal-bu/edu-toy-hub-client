import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "../utils/Axios";

// Create the context
const ProductContext = createContext();

// Create the FavoriteProvider component
export const ProductProvider = ({ children }) => {
  const [categoryNames, setCategoryNames] = useState({
    loading: true,
    error: true,
    data: [],
  });
  const [dataLimit, setDataLimit] = useState(20);
  const [allProductsLimit, setAllProductsLimit] = useState(20);
  const [allProductsQuery, setAllProductsQuery] = useState("");
  const [categoryData, setCategoryData] = useState({
    loading: true,
    error: true,
    data: [],
  });
  const [allProducts, setAllProducts] = useState({
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
        let res = await Axios.get(
          `/toys/cat/${selectedCategory}?limit=${dataLimit}`
        );
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
  }, [selectedCategory, dataLimit]);

  //all product
  useEffect(() => {
    async function doGetRequest() {
      setAllProducts((prev) => ({
        ...prev,
        loading: true,
        error: false,
        data: [],
      }));
      try {
        let res = await Axios.get(
          `/toys?limit=${allProductsLimit}${
            allProductsQuery ? "&q=" + allProductsQuery : null
          }`
        );
        let data = res.data;
        setAllProducts((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data,
        }));
      } catch (error) {
        setAllProducts((prev) => ({
          ...prev,
          loading: false,
          error: true,
          data: [],
        }));
      }
    }

    doGetRequest();
  }, [allProductsQuery, allProductsLimit]);

  return (
    <ProductContext.Provider
      value={{
        categoryNames,
        categoryData,
        allProducts,
        setCategoryData,
        setDataLimit,
        setSelectedCategory,
        setAllProductsLimit,
        setAllProductsQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the toy context
export const useProducts = () => useContext(ProductContext);
