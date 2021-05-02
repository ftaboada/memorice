import { useState, useEffect } from "react";
import { stringifyTime, ColorRange } from "../../functions";

const Timer = ({ setGameOver }) => {
  const [counter, setCounter] = useState(3100);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 100);
    const newColor = ColorRange(counter)
    setColor(newColor);
    counter === 0 && setGameOver(true)
  }, [counter]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "flex-end",
        margin: "24px 0px 4px -35.3%",
      }}
    >
      <p
        style={{
          color: "#DADADF",
          fontFamily: "Arial",
          fontSize: "26px",
          fontWeight: 100,
        }}
      >
        Tiempo restante:
        <span
          style={{
            color: color,
            fontFamily: "Arial",
            fontSize: "26px",
            fontWeight: 100,

            margin: '1px 0px 0px 20px',
            position: 'absolute'
          }}
        >
          {stringifyTime(counter) || ''} segundos
        </span>
      </p>
    </div>
  );
};
export default Timer;
