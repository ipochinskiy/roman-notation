import React from 'react';
import { shallow } from 'enzyme';

import { Card } from './Card';

describe('Card', () => {
  it('should render correctly', () => {
    const component = shallow(<Card>Bazzinga!</Card>);

    expect(component).toMatchInlineSnapshot(`
      <div
        className="card"
      >
        Bazzinga!
      </div>
    `);
  });
});
