import React, { Component } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import styles from './Settings.module.scss';
import '../../Globals.scss';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      nameModalVisible: false,
      showNameError: false,
    };
  }

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };

  checkNameLength = () => {
    return this.state.name.length > 2
      ? this.setState({ showNameError: false, nameModalVisible: false })
      : this.setState({ showNameError: true });
  };

  showNameModal = () => {
    this.setState({ nameModalVisible: !this.state.nameModalVisible });
  };
  render() {
    return (
      <SettingsContext.Consumer>
        {(context) => {
          const {
            cardBack,
            name,
            gameBackground,
            changeCardBack,
            changeGameBackground,
            changePlayerName,
          } = context;
          return (
            <div className="menu__wrapper">
              <div className="menu">
                <button
                  className="menu__btnBack"
                  onClick={() => this.props.showMenu()}
                >
                  Back
                </button>

                <p className="menu__label">Your name:</p>
                <p className="menu__labelInfo">{name}</p>
                <button className="menu__btn" onClick={this.showNameModal}>
                  Change name
                </button>

                {this.state.nameModalVisible ? (
                  <div className="menu__modal">
                    {this.state.showNameError ? (
                      <p className="menu__error">Your name is too short!</p>
                    ) : null}
                    <input
                      className="menu__input"
                      type="text"
                      value={this.state.name}
                      onChange={this.changeName}
                      placeholder="Your name ..."
                    />
                    <button
                      className="menu__btn"
                      onClick={() => {
                        this.checkNameLength();
                        changePlayerName(this.state.name);
                      }}
                    >
                      Save
                    </button>
                  </div>
                ) : null}

                <p className="menu__label">Card type:</p>
                <button
                  className="menu__btn"
                  onClick={
                    cardBack === 'frozen' ? () => changeCardBack() : null
                  }
                >
                  Animals
                  {cardBack === 'animals' ? (
                    <div className={styles.checked}>&bull;</div>
                  ) : null}
                </button>
                <button
                  className="menu__btn"
                  onClick={
                    cardBack === 'animals' ? () => changeCardBack() : null
                  }
                >
                  Frozen
                  {cardBack === 'frozen' ? (
                    <div className={styles.checked}>&bull;</div>
                  ) : null}
                </button>

                <p className="menu__label">Game background:</p>
                <button
                  className="menu__btn"
                  onClick={
                    gameBackground === 'light'
                      ? () => changeGameBackground()
                      : null
                  }
                >
                  Dark
                  {gameBackground === 'dark' ? (
                    <div className={styles.checked}>&bull;</div>
                  ) : null}
                </button>
                <button
                  className="menu__btn"
                  onClick={
                    gameBackground === 'dark'
                      ? () => changeGameBackground()
                      : null
                  }
                >
                  Light
                  {gameBackground === 'light' ? (
                    <div className={styles.checked}>&bull;</div>
                  ) : null}
                </button>
              </div>
            </div>
          );
        }}
      </SettingsContext.Consumer>
    );
  }
}
export default Settings;
