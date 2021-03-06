import anime from "animejs";
import { useEffect, useRef } from "react";

const url =
  "https://i.pinimg.com/474x/a9/94/dc/a994dc0fd62763bb2cf9bc81c5e24100.jpg";

const Card = ({ idx, handleClick, side, done, value, disabled, gameOver }) => {
  const animeRef = useRef(null);
  const style = {
    opacity: 0,
    height: "86px",
    width: "62px",
    backgroundImage: side || done ? "none" : `url(${url})`,
    backgroundColor: side || done ? "#FFF" : "none",
    backgroundSize: "cover",
    margin: "8px",
    borderRadius: "3px",
    border: "solid 1px #E0E0E0",
    boxShadow: "4px 4px 4px #0A0A0A",
    filter: side ? "brightness(100%)" : "brightness(75%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  useEffect(() => {
    const animation = animeRef.current;
    anime({
      targets: animation,
      opacity: 1,
      delay: 1 + idx * 36,
    });
    return () => {
      anime.remove(animation);
    };
  }, [idx]);
  const handleEnter = () => {
    anime({
      targets: animeRef.current,
      scale: 1.2,
      duration: 2500,
      filter: "brightness(100%)",
      complete: () => {
        anime({
          targets: animeRef.current,
          rotate: [0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5],
          direction: "alternate",
          easing: "linear",
          loop: true,
        });
      },
    });
  };
  const handleLeave = () => {
    anime.remove(animeRef.current);
    anime({
      targets: animeRef.current,
      scale: 1,
      rotate: 0,
      filter: side ? "brightness(100%)" : "brightness(75%)",
    });
  };
  const internalClick = () => {
    if (gameOver) {
      return
    }
    !disabled && !done && handleClick(idx);
    return;
  };
  return (
    <div
      ref={animeRef}
      style={style}
      onPointerEnter={!done && !side ? handleEnter : null}
      onPointerLeave={handleLeave}
      onClick={internalClick}
    >
      {(side || done) && <p>{value}</p>}
    </div>
  );
};
export default Card;
