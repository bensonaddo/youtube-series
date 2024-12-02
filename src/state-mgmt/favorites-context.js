import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export function FavoritesContextProvider(props) {
  // Setting up the state for the context provider.
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // get latest state and add new meetup to the list
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup)
    );
  }
  function removeFavoriteHandler(meetupId) {
    // get latest state and remove meetup from the list
    setUserFavorites(
      (prevUserFavorites) =>
        prevUserFavorites.filter((meetup) => meetup.id !== meetupId) // filter out the meetup with the given id
    );
  }

  //   Determine if an item is a favorite.
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId); // check if the meetup with the given id is in the list
  }

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
