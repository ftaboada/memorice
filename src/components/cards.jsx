import React from "react";
import Card from "./card";
import "../Styles/cards/board.css";
export default function Cards(props) {
  if (props.cards) {
    return (
      <div className="cards">
        {props.cards.map((c, i) => (
          <Card card={c} key={i} />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
