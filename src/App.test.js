import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Menu from './components/Menu/Menu';

describe('Component <App />', () => {
  it('should render itself', () => {
    shallow(<App />);
  });

  it('should render <Menu /> component inside', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Menu />)).toBe(true);
  });
});
