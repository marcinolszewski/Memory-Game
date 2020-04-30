import React from 'react';
import { shallow } from 'enzyme';
import Gameover from './Gameover';
import MenuBtn from '../MenuBtn/MenuBtn';

const setUp = (props) => {
  const component = shallow(<Gameover {...props} />);
  return component;
};

let wrapper;

beforeEach(() => {
  wrapper = setUp();
});

describe('GAMEOVER component', () => {
  it('Should render without errors', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('Should contain "Start again" button', () => {
    const btn = shallow(<MenuBtn />);
    expect(btn.length).toEqual(1);
  });
});
