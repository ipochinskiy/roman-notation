import React from 'react';
import { shallow } from 'enzyme';

import { ConverterPage } from './ConverterPage';

describe('ConverterPage', () => {
  it('should render correctly', () => {
    const component = shallow(<ConverterPage />);

    expect(component).toMatchInlineSnapshot(`
      <LayoutOutlet>
        <div
          className="page"
        >
          <ArabicToRomanConverter />
        </div>
      </LayoutOutlet>
    `);
  });
});
