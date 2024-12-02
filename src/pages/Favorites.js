import { useContext } from "react";

import FavoritesContext from "../state-mgmt/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  // added default message when no favorites
  if (favoritesCtx.totalFavorites === 0) {
    return <p>You have no favorites yet. Start adding some?</p>;
  }

  return (
    <div>
      <h1>Favorites</h1>
      <MeetupList meetups={favoritesCtx.favorites} />
    </div>
  );
}

export default Favorites;
