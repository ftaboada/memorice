import { useEffect, useState } from "react";
import { deckMaker } from "../../functions";
import Card from "./card";

const CardContainer = ({ gameOver }) => {
  const [deck, setDeck] = useState(null);
  const [selection, setSelection] = useState([]);
  const [disabled, setDisabled] = useState(false)
  const [foundQuatity, setFoundQuantity] = useState(0)
  const [streak, setStreak] = useState(0)
  useEffect(() => {
    const newDeck = deckMaker();
    setDeck(newDeck);
  }, []);
  useEffect(() => {
    if (selection.length === 2) {
      setDisabled(true)
      if (selection[0].value === selection[1].value) {
        const newItem1 = { ...deck[selection[0].idx] };
        newItem1.done = true;
        const newItem2 = { ...deck[selection[1].idx] };
        newItem2.done = true;
        const newDeck = [...deck];
        newDeck[selection[0].idx] = newItem1;
        newDeck[selection[1].idx] = newItem2;
        setDisabled(false)
        setSelection([]);
        setDeck(newDeck);
        setFoundQuantity(foundQuatity + 1)
        setStreak(streak + 1)
        return;
      }
      setTimeout(handleClean, 700);
    }
  }, [selection]);
  const handleClick = (idx) => {
    const newItem = { ...deck[idx] };
    newItem.side = true;
    const items = [...deck];
    items[idx] = newItem;
    setDeck(items);
    setSelection([...selection, { idx, value: newItem.value }]);
  };
  const handleClean = () => {
    const newDeck = [...deck];
    const cleanDeck = newDeck.map((card) => {
      return { ...card, side: false };
    });
    setStreak(0)
    setDeck(cleanDeck);
    setSelection([]);
    setDisabled(false)
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        margin: "24px 0px 0px 0px",
      }}
    >
      <div
        style={{
          height: "620px",
          width: "920px",
          backgroundColor: "#161625",
          borderRadius: "4px",
          border: "solid 1px #353535",
          padding: "12px",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {deck &&
          deck.map((card, idx) => {
            return (
              <Card
                gameOver={gameOver}
                disabled={disabled}
                key={idx}
                idx={idx}
                handleClick={handleClick}
                side={card.side}
                done={card.done}
                value={card.value}
              />
            );
          })}
      </div>
    </div>
  );
};
export default CardContainer;
