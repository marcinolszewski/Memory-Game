import React from 'react';
import { shallow, mount } from 'enzyme';
import Settings from './Settings';
import SettingsContextProvider from './../../context/SettingsContext';
import MenuBtn from './../MenuBtn/MenuBtn';

describe('Component <Settings />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Settings />, {
      wrappingComponent: SettingsContextProvider,
    });
  });

  it('should render itself', () => {
    shallow(<Settings />);
  });

  it('renders settings buttons', () => {
    expect(wrapper.find('button')).toHaveLength(6);
  });

  it('renders default values', () => {
    SettingsContextProvider.setState({ name: 'PlayerCHUJ' });

    console.log(wrapper.debug());
    expect(wrapper.text().includes('Player')).toBe(true);
  });
});
