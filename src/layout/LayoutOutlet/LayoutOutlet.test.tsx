import React from 'react';
import { shallow } from 'enzyme';

import { LayoutOutlet } from './LayoutOutlet';

describe('LayoutOutlet', () => {
  it('renders learn react link', () => {
    const component = shallow(<LayoutOutlet>Bazzinga!</LayoutOutlet>);

    expect(component).toMatchInlineSnapshot(`
      <div
        className="outlet"
      >
        Bazzinga!
      </div>
    `);
  });
});
