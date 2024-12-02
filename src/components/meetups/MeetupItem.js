import { useContext } from "react";
import Card from "../card/Card";
import meetupItemCss from "./MeetupItem.module.css";
import FavoritesContext from "../../state-mgmt/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  const { image, title, address, description } = props;
  return (
    <li className={meetupItemCss.item}>
      <Card>
        <div className={meetupItemCss.image}>
          <img src={image} alt={title} />
        </div>
        <div className={meetupItemCss.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={meetupItemCss.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
