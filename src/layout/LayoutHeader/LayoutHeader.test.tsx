import React from 'react';
import { shallow } from 'enzyme';

import { LayoutHeader } from './LayoutHeader';

describe('LayoutHeader', () => {
  it('renders learn react link', () => {
    const component = shallow(<LayoutHeader />);

    expect(component).toMatchInlineSnapshot(`
      <header
        className="header"
      >
        <Text
          color="neutral-3"
          size="large"
        >
          Learn Roman notation
        </Text>
      </header>
    `);
  });
});
