import React from 'react';
import {shallow} from 'enzyme';
import Home from './home.jsx';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>);
  });

  test('should render heading', () => {
    expect(wrapper.find('h1.display-4').text()).toBe('Simple React Template');
  });

  test('should have a learn more button', () => {
    expect(wrapper.find('a.btn.btn-lg')).toBeDefined();
  });
});
