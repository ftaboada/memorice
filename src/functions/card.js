import { Card } from "../class/card";

export const deckMaker = () => {
  const pairs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const deck = [];
  const elevenCards = pairs.map((element) => {
    const newCard = new Card(element);
    return newCard;
  });
  for (let i = 0; i < 6; i++) {
    deck.push(...elevenCards);
  }
  return swapDeck(deck);
};

const swapDeck = (deck) => {
  deck.forEach((card, idx) => {
    const swapIdx = Math.floor(Math.random() * deck.length);
    const temp = deck[swapIdx];
    deck[swapIdx] = card;
    deck[idx] = temp;
  });
  return deck;
};
