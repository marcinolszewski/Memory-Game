import React, { Component } from 'react';
import Card from './Card';
import uuid from 'uuid/v4';

class Board extends Component {
  state = {
    board: this.generateBoard(),
    collectedItems: [],
    tempItems: [],
    currCheckedIds: []
  };

  generateBoard() {
    const shuffledArray = [
      {
        name: 'marek',
        id: uuid(),
        pairId: 1,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'krzysztof',
        id: uuid(),
        pairId: 2,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'sandra',
        id: uuid(),
        pairId: 3,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'barbara',
        id: uuid(),
        pairId: 4,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'zofia',
        id: uuid(),
        pairId: 5,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'marek',
        id: uuid(),
        pairId: 1,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'krzysztof',
        id: uuid(),
        pairId: 2,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'sandra',
        id: uuid(),
        pairId: 3,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'barbara',
        id: uuid(),
        pairId: 4,
        isVisible: false,
        isPaired: false
      },
      {
        name: 'zofia',
        id: uuid(),
        pairId: 5,
        isVisible: false,
        isPaired: false
      }
    ].sort(() => Math.random() - 0.5);

    return shuffledArray;
  }

  revealCard = el => {
    const { id } = el.target;
    const board = [...this.state.board];
    const tempItems = [...this.state.tempItems];
    const currCheckedIds = [...this.state.currCheckedIds];

    board.map(card => {
      if (card.id === id) {
        if (tempItems.length < 2) {
          currCheckedIds.push(id);
          tempItems.push(card.pairId);
        } else {
          tempItems.length = currCheckedIds.length = 0;
          currCheckedIds.push(id);
          tempItems.push(card.pairId);
        }

        card.isVisible = !card.isVisible;
      }
    });

    setTimeout(() => {
      if (tempItems[0] !== tempItems[1] && tempItems.length !== 1) {
        board.map(card => {
          if (card.id === currCheckedIds[0]) {
            card.isVisible = false;
          }
          if (card.id === currCheckedIds[1]) {
            card.isVisible = false;
          }
          console.log(card);
        });
      }
      this.setState({ board });
    }, 1500);

    console.log(currCheckedIds);
    console.log(board);

    this.setState({ currCheckedIds });
    this.setState({ tempItems });
    this.setState({ board });
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
