import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const setUp = (props) => {
  const component = shallow(<Card {...props} />);
  return component;
};

let wrapper;

beforeEach(() => (wrapper = setUp()));

describe('CARD component', () => {
  it('Should render component without problems', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('Should be rotated when clicked', () => {
    wrapper = setUp({ isVisible: true });
    expect(wrapper.find('.rotate').length).toEqual(1);
  });
});
