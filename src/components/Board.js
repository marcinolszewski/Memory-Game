import React, { Component } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import Gameover from './Gameover';
import uuid from 'uuid/v4';
import styles from './Board.module.scss';

class Board extends Component {
  state = {
    board: this.generateBoard(),
    collectedItems: [],
    tempItems: [],
    currCheckedIds: [],
    pairs: 0,
    gameLimit: 6,
    score: 0
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
    const { board, tempItems, currCheckedIds, pairs, gameLimit } = this.state;

    board.forEach(card => {
      if (!card.isVisible && card.id === id) {
        if (!(tempItems.length < 2))
          tempItems.length = currCheckedIds.length = 0;
        currCheckedIds.push(id);
        tempItems.push(card.pairId);
        card.isVisible = !card.isVisible;
      }
    });

    if (tempItems[0] !== tempItems[1] && tempItems.length !== 1) {
      board.forEach(card => {
        if (card.id === currCheckedIds[0] || card.id === currCheckedIds[1]) {
          setTimeout(() => {
            card.isVisible = !card.isVisible;
            this.setState({ board });
          }, 700);
        }
      });
    }

    if (tempItems[0] === tempItems[1]) {
      this.setState({ pairs: pairs + 1 });
    }

    this.setState({ currCheckedIds, tempItems, board }, () => {
      const { pairs, gameLimit } = this.state;
      if (pairs === gameLimit) {
        this.finishGame();
        this.toggleGameOverBoard(1000);
      }
    });
  };

  toggleGameOverBoard = timeout => {
    setTimeout(() => {
      this.setState({ isGameoverVisible: !this.state.isGameoverVisible });
    }, timeout);
  };

  finishGame = () => {
    this.setState({
      score: this.state.score + 1,
      pairs: 0
    });
  };

  resetGame = () => {
    this.setState({ board: this.generateBoard(), isGameoverVisible: false });
  };

  render() {
    const { board, score } = this.state;
    return (
      <div className={styles.boardWrapper}>
        <Gameover
          isVisible={this.state.isGameoverVisible}
          handleClick={this.resetGame}
        />
        <Scoreboard score={score} />
        <div className={styles.board}>
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
      </div>
    );
  }
}

export default Board;
