import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Component <Spinner />', () => {
  it('should render itself', () => {
    shallow(<Spinner />);
  });

  it('should have two div elements', () => {
    const wrapper = shallow(<Spinner />);
    expect(
      wrapper.containsMatchingElement(
        <div>
          <div></div>
        </div>
      )
    ).toBe(true);
  });
});
