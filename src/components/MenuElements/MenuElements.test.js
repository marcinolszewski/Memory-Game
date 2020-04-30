import React from 'react';
import { shallow } from 'enzyme';
import MenuElements from './MenuElements';
import { findElementByAttr } from '../../testsUtils/testUtils';

const setUp = (props) => {
  const component = shallow(<MenuElements {...props} />);
  return component;
};

let wrapper;

beforeEach(() => {
  wrapper = setUp();
});

describe('MENU ELEMENTS component', () => {
  it('Should render without errors', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('Should have 3 buttons inside', () => {
    const menuBtns = findElementByAttr(wrapper, 'menuElement');
    expect(menuBtns.length).toEqual(3);
  });
});
