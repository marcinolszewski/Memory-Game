import React, { Component } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import styles from './Settings.module.scss';
import '../../Globals.scss';
import MenuBtn from '../MenuBtn/MenuBtn';

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
                <MenuBtn
                  btnStyle={'back'}
                  handleOnClick={() => this.props.showMenu()}
                >
                  Back
                </MenuBtn>

                <p className="menu__label">Your name:</p>
                <p className="menu__labelInfo" data-test="playerName">
                  {name}
                </p>

                <MenuBtn
                  handleOnClick={this.showNameModal}
                  data-test="showModalBtn"
                >
                  Change name
                </MenuBtn>

                {this.state.nameModalVisible ? (
                  <div className="menu__modal" data-test="changeNameModal">
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
                    <MenuBtn
                      handleOnClick={() => {
                        this.checkNameLength();
                        changePlayerName(this.state.name);
                      }}
                    >
                      Save
                    </MenuBtn>
                  </div>
                ) : null}

                <p className="menu__label">Card type:</p>

                <MenuBtn
                  handleOnClick={
                    cardBack === 'frozen' ? () => changeCardBack() : null
                  }
                  data-test="animalsBtn"
                >
                  Animals{' '}
                  {cardBack === 'animals' ? (
                    <div className={styles.checked} data-test="elementChecked">
                      &bull;
                    </div>
                  ) : null}
                </MenuBtn>

                <MenuBtn
                  handleOnClick={
                    cardBack === 'animals' ? () => changeCardBack() : null
                  }
                  data-test="frozenBtn"
                >
                  Frozen{' '}
                  {cardBack === 'frozen' ? (
                    <div className={styles.checked} data-test="elementChecked">
                      &bull;
                    </div>
                  ) : null}
                </MenuBtn>

                <p className="menu__label">Game background:</p>

                <MenuBtn
                  handleOnClick={
                    gameBackground === 'light'
                      ? () => changeGameBackground()
                      : null
                  }
                  data-test="darkThemeBtn"
                >
                  Dark
                  {gameBackground === 'dark' ? (
                    <div className={styles.checked} data-test="elementChecked">
                      &bull;
                    </div>
                  ) : null}
                </MenuBtn>

                <MenuBtn
                  handleOnClick={
                    gameBackground === 'dark'
                      ? () => changeGameBackground()
                      : null
                  }
                  data-test="lightThemeBtn"
                >
                  Light
                  {gameBackground === 'light' ? (
                    <div className={styles.checked} data-test="elementChecked">
                      &bull;
                    </div>
                  ) : null}
                </MenuBtn>
              </div>
            </div>
          );
        }}
      </SettingsContext.Consumer>
    );
  }
}
export default Settings;
