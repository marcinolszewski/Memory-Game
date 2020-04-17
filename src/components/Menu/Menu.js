import React, { Component } from 'react';
import Background from '../Background/Background';
import Board from '../Board/Board';
import MenuElements from '../MenuElements/MenuElements';
import Settings from '../Settings/Settings';
import Scores from '../Scores/Scores';

class Menu extends Component {
  state = {
    newGame: false,
    settings: false,
    scores: false,
  };

  changeMenu = (element) => {
    const state = { ...this.state };
    for (const key in state) {
      key === element ? (state[key] = true) : (state[key] = false);
    }

    this.setState({ ...state });
  };

  showMenu = () => {
    const state = { ...this.state };
    for (const key in state) {
      state[key] = false;
    }
    this.setState({ ...state });
  };

  render() {
    const { newGame, settings, scores } = this.state;
    let menu;

    if (newGame) {
      menu = <Board showMenu={() => this.showMenu()} />;
    } else if (settings) {
      menu = <Settings showMenu={() => this.showMenu()} />;
    } else if (scores) {
      menu = <Scores showMenu={() => this.showMenu()} />;
    } else {
      menu = <MenuElements changeMenu={(el) => this.changeMenu(el)} />;
    }

    return <Background>{menu}</Background>;
  }
}

export default Menu;
