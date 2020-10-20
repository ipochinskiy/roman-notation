import React from 'react';
import { shallow } from 'enzyme';

import { Text } from './Text';

describe('Text', () => {
  describe('with no props set', () => {
    it('should use default values', () => {
      const component = shallow(<Text>Bazzinga!</Text>);

      expect(component).toMatchInlineSnapshot(`
        <span
          className="text size--medium color--neutral-1"
        >
          Bazzinga!
        </span>
      `);
    });
  });

  describe('with "size" and "color" props set', () => {
    it('should set corresponding classes', () => {
      const component = shallow(
        <Text color='neutral-2' size='large'>
          Bazzinga!
        </Text>,
      );

      expect(component).toMatchInlineSnapshot(`
        <span
          className="text size--large color--neutral-2"
        >
          Bazzinga!
        </span>
      `);
    });
  });
});
