import { useContext } from "react";

import FavoritesContext from "../state-mgmt/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  // added default message when no favorites
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  );
}

export default Favorites;
