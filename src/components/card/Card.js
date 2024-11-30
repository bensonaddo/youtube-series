import cardComponentCss from "./Card.module.css";

function Card(props) {
  return <div className={cardComponentCss.card}>{props.children}</div>;
}

export default Card;
