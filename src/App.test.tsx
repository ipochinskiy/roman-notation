import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    const component = shallow(<App />);

    expect(component.text()).toMatch(/learn react/i);
  });
});
