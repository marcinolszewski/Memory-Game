import React, { Component } from 'react';
import Card from '../Card/Card';
import Scoreboard from '../Scoreboard/Scoreboard';
import Gameover from '../Gameover/Gameover';
import { v4 as uuidv4 } from 'uuid';
import styles from './Board.module.scss';
import images from '../../componentAssets/Images';
import '../../Globals.scss';
import {
  cardReveal,
  foundPair,
  gameWin,
  menuMusic,
} from '../../componentAssets/Sounds';

class Board extends Component {
  componentDidMount() {
    menuMusic.play();
  }

  componentWillUnmount() {
    menuMusic.stop();
  }

  state = {
    board: this.generateBoard(),
    collectedItems: [],
    tempItems: [],
    currCheckedIds: [],
    pairs: 0,
    gameLimit: 8,
    score: 0,
    isGameoverVisible: false,
    isMusicFaded: false,
  };

  generateBoard() {
    const shuffledArray = [
      {
        imgSrc: images.cat,
        id: uuidv4(),
        pairId: 1,
        isVisible: false,
      },
      {
        imgSrc: images.dino,
        id: uuidv4(),
        pairId: 2,
        isVisible: false,
      },
      {
        imgSrc: images.giraffe,
        id: uuidv4(),
        pairId: 3,
        isVisible: false,
      },
      {
        imgSrc: images.goat,
        id: uuidv4(),
        pairId: 4,
        isVisible: false,
      },
      {
        imgSrc: images.panda,
        id: uuidv4(),
        pairId: 5,
        isVisible: false,
      },
      {
        imgSrc: images.rhino,
        id: uuidv4(),
        pairId: 6,
        isVisible: false,
      },
      {
        imgSrc: images.snake,
        id: uuidv4(),
        pairId: 7,
        isVisible: false,
      },
      {
        imgSrc: images.tiger,
        id: uuidv4(),
        pairId: 8,
        isVisible: false,
      },
      {
        imgSrc: images.cat,
        id: uuidv4(),
        pairId: 1,
        isVisible: false,
      },
      {
        imgSrc: images.dino,
        id: uuidv4(),
        pairId: 2,
        isVisible: false,
      },
      {
        imgSrc: images.giraffe,
        id: uuidv4(),
        pairId: 3,
        isVisible: false,
      },
      {
        imgSrc: images.goat,
        id: uuidv4(),
        pairId: 4,
        isVisible: false,
      },
      {
        imgSrc: images.panda,
        id: uuidv4(),
        pairId: 5,
        isVisible: false,
      },
      {
        imgSrc: images.rhino,
        id: uuidv4(),
        pairId: 6,
        isVisible: false,
      },
      {
        imgSrc: images.snake,
        id: uuidv4(),
        pairId: 7,
        isVisible: false,
      },
      {
        imgSrc: images.tiger,
        id: uuidv4(),
        pairId: 8,
        isVisible: false,
      },
    ].sort(() => Math.random() - 0.5);

    return shuffledArray;
  }

  revealCard = (el) => {
    el.stopPropagation();
    const { id } = el.currentTarget;
    const { board, tempItems, currCheckedIds, pairs } = this.state;

    cardReveal.play();

    board.forEach((card) => {
      if (!card.isVisible && card.id === id) {
        if (!(tempItems.length < 2))
          tempItems.length = currCheckedIds.length = 0;
        currCheckedIds.push(id);
        tempItems.push(card.pairId);
        card.isVisible = !card.isVisible;
      }
    });

    if (tempItems[0] !== tempItems[1] && tempItems.length !== 1) {
      board.forEach((card) => {
        if (card.id === currCheckedIds[0] || card.id === currCheckedIds[1]) {
          setTimeout(() => {
            card.isVisible = !card.isVisible;
            this.setState({ board });
          }, 700);
        }
      });
    }

    if (tempItems[0] === tempItems[1]) {
      foundPair.play();
      this.setState({ pairs: pairs + 1 });
    }

    this.setState({ currCheckedIds, tempItems, board }, () => {
      const { pairs, gameLimit } = this.state;
      if (pairs === gameLimit) {
        if (!this.state.isMusicFaded) menuMusic.fade(1, 0.2, 100);
        gameWin.play();
        this.finishGame();
        this.toggleGameOverBoard(1000);
      }
    });
  };

  toggleGameOverBoard = (timeout) => {
    setTimeout(() => {
      this.setState({ isGameoverVisible: !this.state.isGameoverVisible });
    }, timeout);
  };

  readScoreFromCookie = () => {
    // TODO
  };

  saveScoreToCookie = (score) => (document.cookie = `"score=${score}"`);

  finishGame = () => {
    this.setState(
      {
        score: this.state.score + 1,
        pairs: 0,
      },
      () => this.saveScoreToCookie(this.state.score)
    );
  };

  muteMusic = () => {
    !this.state.isMusicFaded
      ? menuMusic.fade(1, 0, 200)
      : menuMusic.fade(0, 1, 200);

    this.setState({ isMusicFaded: !this.state.isMusicFaded });
  };

  resetGame = () => {
    if (!this.state.isMusicFaded) menuMusic.fade(0.2, 1, 100);
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
        <div className="btn__wrapper">
          <button className="menu__btn" onClick={() => this.props.showMenu()}>
            Menu
          </button>
          <div className="menu__mute">
            <button
              className={
                this.state.isMusicFaded
                  ? `${styles.muteBtn} ${styles.muted}`
                  : `${styles.muteBtn}`
              }
              onClick={this.muteMusic}
            ></button>
          </div>
        </div>

        <Scoreboard score={score} />
        <div className={styles.board}>
          {board.map((el) => {
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
