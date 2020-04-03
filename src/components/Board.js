import React, { Component } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import Gameover from './Gameover';
import { v4 as uuidv4 } from 'uuid';
import styles from './Board.module.scss';
import cat from '../assets/cat.png';
import dino from '../assets/dino.png';
import giraffe from '../assets/giraffe.png';
import goat from '../assets/goat.jpg';
import panda from '../assets/panda.jpg';
import snake from '../assets/snake.jpg';
import rhino from '../assets/rhino.png';
import tiger from '../assets/tiger.jpg';

class Board extends Component {
  readScore = () => {};

  state = {
    board: this.generateBoard(),
    collectedItems: [],
    tempItems: [],
    currCheckedIds: [],
    pairs: 0,
    gameLimit: 8,
    score: 0,
    isGameoverVisible: false
  };

  generateBoard() {
    const shuffledArray = [
      {
        imgSrc: cat,
        id: uuidv4(),
        pairId: 1,
        isVisible: false
      },
      {
        imgSrc: dino,
        id: uuidv4(),
        pairId: 2,
        isVisible: false
      },
      {
        imgSrc: giraffe,
        id: uuidv4(),
        pairId: 3,
        isVisible: false
      },
      {
        imgSrc: goat,
        id: uuidv4(),
        pairId: 4,
        isVisible: false
      },
      {
        imgSrc: panda,
        id: uuidv4(),
        pairId: 5,
        isVisible: false
      },
      {
        imgSrc: rhino,
        id: uuidv4(),
        pairId: 6,
        isVisible: false
      },
      {
        imgSrc: snake,
        id: uuidv4(),
        pairId: 7,
        isVisible: false
      },
      {
        imgSrc: tiger,
        id: uuidv4(),
        pairId: 8,
        isVisible: false
      },
      {
        imgSrc: cat,
        id: uuidv4(),
        pairId: 1,
        isVisible: false
      },
      {
        imgSrc: dino,
        id: uuidv4(),
        pairId: 2,
        isVisible: false
      },
      {
        imgSrc: giraffe,
        id: uuidv4(),
        pairId: 3,
        isVisible: false
      },
      {
        imgSrc: goat,
        id: uuidv4(),
        pairId: 4,
        isVisible: false
      },
      {
        imgSrc: panda,
        id: uuidv4(),
        pairId: 5,
        isVisible: false
      },
      {
        imgSrc: rhino,
        id: uuidv4(),
        pairId: 6,
        isVisible: false
      },
      {
        imgSrc: snake,
        id: uuidv4(),
        pairId: 7,
        isVisible: false
      },
      {
        imgSrc: tiger,
        id: uuidv4(),
        pairId: 8,
        isVisible: false
      }
    ].sort(() => Math.random() - 0.5);

    return shuffledArray;
  }

  revealCard = el => {
    el.stopPropagation();
    const { id } = el.currentTarget;
    const { board, tempItems, currCheckedIds, pairs } = this.state;

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
                imgSrc={el.imgSrc}
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
