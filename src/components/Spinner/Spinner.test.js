import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';
import { findElementByAttr } from '../../testsUtils/testUtils';

const setUp = () => {
  const component = shallow(<Spinner />);
  return component;
};

let wrapper;

beforeEach(() => {
  wrapper = setUp();
});

describe('SPINNER component', () => {
  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render wrapper div of spinner', () => {
    const spinnerWrapper = findElementByAttr(wrapper, 'spinnerWrapper');
    expect(spinnerWrapper.length).toBe(1);
  });

  it('Should render spinner div', () => {
    const spinner = findElementByAttr(wrapper, 'spinner');
    expect(spinner.length).toBe(1);
  });
});
