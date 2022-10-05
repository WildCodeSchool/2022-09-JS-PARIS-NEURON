import { createContext, useContext } from "react";

export const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);
