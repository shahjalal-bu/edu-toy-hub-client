import React, { createContext, useContext, useEffect, useReducer } from "react";
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
const FETCHING_START = "FETCHING_START";
const FETCHING_SUCCESS = "FETCHING_SUCCESS";
const FETCHING_ERROR = "FETCHING_ERROR";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const ADD_TO_CART = "ADD_TO_CART";

// Define the reducer function
const productReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
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
  //api call
  useEffect(() => {
    dispatch({ type: FETCHING_START });
    async function getProducts() {
      try {
        const response = await Axios.get("/toys/all");
        if (response.status === 200)
          dispatch({ type: FETCHING_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: FETCHING_ERROR });
      }
    }
    getProducts();
  }, []);

  //define action
  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const removeProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

// Custom hook to access the toy context
export const useProducts = () => useContext(ProductContext);
