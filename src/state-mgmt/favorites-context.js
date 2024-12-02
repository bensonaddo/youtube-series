import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export function FavoritesContextProvider(props) {
  // Setting up the state for the context provider.
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler() {}
  function removeFavoriteHandler() {}

  //   Determine if an item is a favorite.
  function itemIsFavoriteHandler() {}

  // This is the context object that will be provided to all components that use the FavoritesContext.
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
