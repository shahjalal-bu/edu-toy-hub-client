import React, { createContext, useContext, useReducer } from "react";

// Define the initial state of favorites
const initialState = {
  favorites: [],
};

// Create the context
const FavoriteContext = createContext();

// Define the reducer function
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Create the FavoriteProvider component
export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addFavorite = (favorite) => {
    dispatch({ type: "ADD_FAVORITE", payload: favorite });
  };

  const removeFavorite = (favoriteId) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: favoriteId });
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites: state.favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

// Custom hook to access the favorite context
export const useFavorite = () => useContext(FavoriteContext);
