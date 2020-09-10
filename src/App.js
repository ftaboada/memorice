import React from "react";
import GameUx from "./components/gameUx";
import Cards from "./components/cards";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayUx: true,
      cards: [],
    };
    this.startGame = this.startGame.bind(this);
  }
  startGame() {
    let deck = [];
    let source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < source.length; i++) {
        let card = {
          isFlipped: false,
          value: source[i],
          done: false,
          back: `source`,
        };
        deck.push(card);
      }
    }
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    shuffle(deck);
    this.setState({
      displayUx: false,
      cards: this.state.cards.concat(deck),
    });
  }

  render() {
    return (
      <div className="App">
        <GameUx startGame={this.startGame} displayUx={this.state.displayUx} />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}
export default App;
