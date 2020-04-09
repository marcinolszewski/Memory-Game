import React, { Component, createContext } from 'react';

export const SettingsContext = createContext();

class SettingsContextProvider extends Component {
  state = {
    cardBack: 'animals',
    name: 'Player',
    gameBackground: 'light',
  };

  changeCardBack = () => {
    this.setState({
      cardBack: this.state.cardBack === 'animals' ? 'frozen' : 'animals',
    });
  };

  changeGameBackground = () => {
    this.setState({
      gameBackground: this.state.gameBackground === 'dark' ? 'light' : 'dark',
    });
  };

  changePlayerName = (name) => {
    return name.length > 2 ? this.setState({ name: name }) : null;
  };
  render() {
    return (
      <SettingsContext.Provider
        value={{
          ...this.state,
          changeCardBack: this.changeCardBack,
          changeGameBackground: this.changeGameBackground,
          changePlayerName: this.changePlayerName,
        }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsContextProvider;
