import React from 'react';
import { shallow } from 'enzyme';

import { LayoutContainer } from './LayoutContainer';

describe('LayoutContainer', () => {
  it('should render correctly', () => {
    const component = shallow(<LayoutContainer>Bazzinga!</LayoutContainer>);

    expect(component).toMatchInlineSnapshot(`
      <div
        className="layout"
      >
        <div
          className="layoutHeader"
        >
          <LayoutHeader />
        </div>
        <section
          className="layoutSection"
        >
          Bazzinga!
        </section>
      </div>
    `);
  });
});
