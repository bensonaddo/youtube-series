import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export function FavoritesContextProvider(props) {
  return (
    <FavoritesContext.Provider>{props.children}</FavoritesContext.Provider>
  );
}

export default FavoritesContext;
