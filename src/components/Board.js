import React, { Component } from 'react';
import Card from './Card';
import uuid from 'uuid/v4';

class Board extends Component {
  state = {
    board: this.generateBoard(),
    collectedItems: [],
    tempItems: [],
    currCheckedIds: [],
    pairs: 0,
    gameLimit: 6
  };

  generateBoard() {
    const shuffledArray = [
      {
        name: 'marek',
        id: uuid(),
        pairId: 1,
        isVisible: false
      },
      {
        name: 'krzysztof',
        id: uuid(),
        pairId: 2,
        isVisible: false
      },
      {
        name: 'sandra',
        id: uuid(),
        pairId: 3,
        isVisible: false
      },
      {
        name: 'barbara',
        id: uuid(),
        pairId: 4,
        isVisible: false
      },
      {
        name: 'zofia',
        id: uuid(),
        pairId: 5,
        isVisible: false
      },
      {
        name: 'joanna',
        id: uuid(),
        pairId: 6,
        isVisible: false
      },
      {
        name: 'marek',
        id: uuid(),
        pairId: 1,
        isVisible: false
      },
      {
        name: 'krzysztof',
        id: uuid(),
        pairId: 2,
        isVisible: false
      },
      {
        name: 'sandra',
        id: uuid(),
        pairId: 3,
        isVisible: false
      },
      {
        name: 'barbara',
        id: uuid(),
        pairId: 4,
        isVisible: false
      },
      {
        name: 'zofia',
        id: uuid(),
        pairId: 5,
        isVisible: false
      },
      {
        name: 'joanna',
        id: uuid(),
        pairId: 6,
        isVisible: false
      }
    ].sort(() => Math.random() - 0.5);

    return shuffledArray;
  }

  revealCard = el => {
    el.stopPropagation();
    const { id } = el.currentTarget;
    const { board, tempItems, currCheckedIds, pairs } = this.state;

    board.map(card => {
      if (card.id === id) {
        if (!(tempItems.length < 2))
          tempItems.length = currCheckedIds.length = 0;
        currCheckedIds.push(id);
        tempItems.push(card.pairId);
        card.isVisible = !card.isVisible;
      }
    });

    if (tempItems[0] !== tempItems[1] && tempItems.length !== 1) {
      board.map(card => {
        if (card.id === currCheckedIds[0] || card.id === currCheckedIds[1]) {
          setTimeout(() => {
            card.isVisible = !card.isVisible;
            this.setState({ board });
          }, 700);
        }
      });
    }

    if (tempItems[0] === tempItems[1]) {
      console.log('para!');
      this.setState({ pairs: pairs + 1 });
    }

    this.setState({ currCheckedIds, tempItems, board });
    this.resetGame();
    console.log(pairs);
  };

  resetGame = () => {
    if (this.state.pairs === this.state.gameLimit) {
      console.log('you won, reset the game');
    } else {
      console.log('game is not finished');
    }
    console.log(this.state.pairs, this.state.gameLimit);
  };

  render() {
    const { board } = this.state;
    return (
      <div className="card-wrapper">
        {board.map(el => {
          return (
            <Card
              key={el.id}
              id={el.id}
              pairId={el.pairId}
              isVisible={el.isVisible}
              name={el.name}
              handleOnClick={this.revealCard}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
