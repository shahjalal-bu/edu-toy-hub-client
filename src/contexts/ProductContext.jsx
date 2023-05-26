import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "../utils/Axios";
import { useAuth } from "./AuthContext";

// Create the context
const ProductContext = createContext();
// Create the FavoriteProvider component
export const ProductProvider = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const [categoryNames, setCategoryNames] = useState({
    loading: true,
    error: true,
    data: [],
  });
  const [dataLimit, setDataLimit] = useState(20);
  const [allProductsLimit, setAllProductsLimit] = useState(20);
  const [allProductsQuery, setAllProductsQuery] = useState("");
  const [sortByPrice, setSortByPrice] = useState("asc");
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
  const [myProducts, setMyProducts] = useState({
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

  //my product
  useEffect(() => {
    async function doGetRequest() {
      setMyProducts((prev) => ({
        ...prev,
        loading: true,
        error: false,
        data: [],
      }));
      try {
        let res = await Axios.get(
          `/toys/myproduct/${currentUser?.email + "?sort=" + sortByPrice}`,
          {
            headers: {
              Authorization: `token ${localStorage.getItem(
                "toy-access-token"
              )}`,
            },
          }
        );
        let data = res.data;
        setMyProducts((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data,
        }));
      } catch (error) {
        console.log(error);
        setMyProducts((prev) => ({
          ...prev,
          loading: false,
          error: true,
          data: [],
        }));
      }
    }

    doGetRequest();
  }, [currentUser?.email, sortByPrice]);

  return (
    <ProductContext.Provider
      value={{
        categoryNames,
        categoryData,
        allProducts,
        myProducts,
        setCategoryData,
        setDataLimit,
        setSelectedCategory,
        setAllProductsLimit,
        setAllProductsQuery,
        setAllProducts,
        setMyProducts,
        setSortByPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the toy context
export const useProducts = () => useContext(ProductContext);
