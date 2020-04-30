import React from 'react';
import { mount } from 'enzyme';
import Settings from './Settings';
import { findElementByAttr } from '../../testsUtils/testUtils';
import SettingsContextProvider from '../../context/SettingsContext';

const setUp = (props = {}) => {
  const component = mount(<Settings {...props} />, {
    wrappingComponent: SettingsContextProvider,
  });
  return component;
};

// const findButtonAndClickIt = (button, indicator) => {
//   const btn = findElementByAttr(wrapper, button);
//   btn.find('button').simulate('click');
//   const elementIndicator = findElementByAttr(btn, indicator);

//   return elementIndicator;
// };

const showAndReturnModal = () => {
  const button = findElementByAttr(wrapper, 'showModalBtn').find('button');
  button.simulate('click');
  const modal = findElementByAttr(wrapper, 'changeNameModal');

  return modal;
};

let wrapper;

beforeEach(() => {
  wrapper = setUp();
});

describe('SETTINGS component', () => {
  it('Should render without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should contain 6 button components', () => {
    const btn = findElementByAttr(wrapper, 'menuBtn');
    expect(btn.length).toEqual(6);
  });

  it('Should have default name set to "Player"', () => {
    const nameWrap = findElementByAttr(wrapper, 'playerName');
    expect(nameWrap.text()).toEqual('Player');
  });
});

describe('BUTTONS in settings component', () => {
  it('Animals button should have indicator', () => {
    const buttonWrap = findElementByAttr(wrapper, 'animalsBtn');
    const indicator = findElementByAttr(buttonWrap, 'elementChecked');
    expect(indicator.length).toEqual(1);
  });
  it('Light button should have indicator', () => {
    const buttonWrap = findElementByAttr(wrapper, 'lightThemeBtn');
    const indicator = findElementByAttr(buttonWrap, 'elementChecked');
    expect(indicator.length).toEqual(1);
  });
  it('Frozen button should have indicator after clicking on it', () => {
    // Mount <SETTINGS />
    // Search for button "FROZEN"
    // Stimulate click
    // stimulate('click') dont work, which I believe is because
    // of lack of porps and button click always returns null
    // Render? coponent again
    // Check if button contains 'dot indicator' inside
  });

  // Same thing for button "Dark"

  it('Should show modal when user clicks on change name buton', () => {
    const modal = showAndReturnModal();
    expect(modal.length).toEqual(1);
  });
});

describe('MODAL with change name option', () => {
  it('Should have input', () => {
    const modal = showAndReturnModal();
    expect(modal.find('input').length).toEqual(1);
  });

  it('Should have save button', () => {
    const modal = showAndReturnModal();
    expect(modal.find('button').length).toEqual(1);
  });

  it('Should change player name to value provided in input', () => {
    const button = findElementByAttr(wrapper, 'showModalBtn');
    button.simulate('click');
    const modal = findElementByAttr(wrapper, 'changeNameModal');
    const modalInput = modal.find('input');
    const modalBtn = modal.find('button');
    // This does not change input value ↓
    modalInput.simulate('change', { tagret: { value: 'marcin' } });
    // This does not closes the modal ↓
    modalBtn.simulate('click');
    const nameWrap = findElementByAttr(wrapper, 'playerName');
    expect(nameWrap.text()).toEqual('marcin');
  });
});
