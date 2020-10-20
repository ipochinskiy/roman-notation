import React from 'react';
import { shallow } from 'enzyme';

import { ArabicToRomanConverter } from './ArabicToRomanConverter';

describe('ArabicToRomanConverter', () => {
  it('should render correctly', () => {
    const component = shallow(<ArabicToRomanConverter />);

    expect(component).toMatchSnapshot();
  });
});
