import React from 'react';
import { mount } from 'enzyme';
import Scoreboard from './Scoreboard';
import SettingsContextProvider from '../../context/SettingsContext';
import { findElementByAttr } from '../../testsUtils/testUtils';

const setUp = (props) => {
  const component = mount(<Scoreboard {...props} />, {
    wrappingComponent: SettingsContextProvider,
  });
  return component;
};

let wrapper;

beforeEach(() => {
  wrapper = setUp({ steps: 0, score: 0 });
});

describe('SCOREBOARD component', () => {
  it('Should render itself without errors', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('Should have scores equal to 0 at the beginning', () => {
    const scores = findElementByAttr(wrapper, 'scores');
    expect(scores.text()).toEqual('0');
  });
  it('Should have steps equal to 0 at the beginning', () => {
    const scores = findElementByAttr(wrapper, 'steps');
    expect(scores.text()).toEqual('0');
  });
});
