import React from 'react';
import { shallow, mount } from 'enzyme';
import Settings from './Settings';
import MenuBtn from './../MenuBtn/MenuBtn';
import SettingsContext from './../../context/SettingsContext';

describe('Component <Settings />', () => {
  it('should render itself', () => {
    shallow(<Settings />);
  });

  it('Should contain 6 buttons', () => {
    const wrapper = mount(<Settings />);

    expect(wrapper.find(MenuBtn)).toHaveLength(6);
  });
});
