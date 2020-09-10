import React from "react";
import "../Styles/gameUx/gameUx.css";

function GameUx({ startGame, displayUx }) {
  if (displayUx) {
    return (
      <div className="gameUx">
        <h1>
          Bienvenido A <span id="uxTitle">Memorice</span>
        </h1>
        <h3>
          <div onClick={startGame}> Presiona Comenzar para jugar</div>
        </h3>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default GameUx;
