import meetupItemCss from "./MeetupItem.module.css";

function MeetupItem(props) {
  const { image, title, address, description } = props;
  return (
    <li className={meetupItemCss.item}>
      <div className={meetupItemCss.image}>
        <img src={image} alt={title} />
      </div>
      <div className={meetupItemCss.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={meetupItemCss.actions}>
        <button>Favorite</button>
      </div>
    </li>
  );
}

export default MeetupItem;