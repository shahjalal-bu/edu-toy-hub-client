import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import Axios from "../utils/Axios";
// Define the initial state of favorites
const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};
// Create the context
const ProductContext = createContext();
//Define action types
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const ADD_TO_CART = "ADD_TO_CART";

// Define the reducer function
const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((pd) => pd._id !== action.payload),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
// Create the FavoriteProvider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
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
        let res = await Axios.get(`/toys/cat/${selectedCategory}`);
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
  }, [selectedCategory]);

  //define action
  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const removeProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };

  return (
    <ProductContext.Provider value={{ ...state, categoryNames, categoryData }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the toy context
export const useProducts = () => useContext(ProductContext);
