import React, { useState } from "react";
import "../Styles/cards/card.css";
export default function Card({ card }) {
  const [flipped, setFlip] = useState(false);
  if (!flipped) {
    return <div className="carta" onClick={() => setFlip(!flipped)}></div>;
  } else {
    return (
      <div className="front" onClick={() => setFlip(!flipped)}>
        <div className="deco">{card.value}</div>
      </div>
    );
  }
}
