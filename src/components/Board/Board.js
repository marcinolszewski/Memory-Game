import React, { Component } from 'react';
import Card from '../Card/Card';
import Scoreboard from '../Scoreboard/Scoreboard';
import Gameover from '../Gameover/Gameover';
import styles from './Board.module.scss';
import BoardGenerator from '../BoardGenerator/BoardGenerator';
import { SettingsContext } from '../../context/SettingsContext';
import '../../Globals.scss';
import MenuBtn from '../MenuBtn/MenuBtn';
import {
  cardReveal,
  foundPair,
  gameWin,
  menuMusic,
} from '../../componentAssets/Sounds';

import * as firebase from 'firebase/app';
import 'firebase/database';

class Board extends Component {
  static contextType = SettingsContext;

  componentDidMount() {
    menuMusic.play();
  }

  componentWillUnmount() {
    menuMusic.stop();
  }

  state = {
    board: BoardGenerator(this.context.cardBack, 8),
    collectedItems: [],
    tempItems: [],
    currCheckedIds: [],
    pairs: 0,
    gameLimit: 8,
    score: 0,
    steps: 0,
    isGameoverVisible: false,
    isMusicFaded: false,
  };

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

    if (tempItems.length > 1) this.setState({ steps: this.state.steps + 1 });

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

  saveScoreToCookie = (score) => (document.cookie = `score=${score};`);

  saveScoreToDb = (name, steps, time) => {
    const playerScore = {
      name: name,
      steps: steps,
      time: time,
    };

    const newScoreKey = firebase.database().ref().child('scores').push().key;
    const updates = {};
    updates['/scores/' + newScoreKey] = playerScore;

    return firebase.database().ref().update(updates);
  };

  finishGame = () => {
    this.saveScoreToDb(this.context.name, this.state.steps, 0);
    this.setState(
      {
        score: this.state.score + 1,
        pairs: 0,
        steps: 0,
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
    this.setState({
      board: BoardGenerator(this.context.cardBack, 8),
      isGameoverVisible: false,
    });
  };

  render() {
    const { board, score, steps } = this.state;
    return (
      <div className={styles.boardWrapper}>
        <Gameover
          isVisible={this.state.isGameoverVisible}
          handleClick={this.resetGame}
        />
        <div className="btn__wrapper">
          <MenuBtn handleOnClick={() => this.props.showMenu()}>Menu</MenuBtn>
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

        <Scoreboard score={score} steps={steps} />
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
