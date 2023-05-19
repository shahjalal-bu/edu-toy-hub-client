import React, { createContext, useContext, useEffect, useReducer } from "react";
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
