import React from 'react';
import { mount } from 'enzyme';
import Board from './Board';

const setUp = ({ props }) => {
  const component = mount(<Board {...props} />);
  return component;
};

let wrapper;

beforeEach(() => {
  wrapper = setUp();
});
