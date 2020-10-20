import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

describe('Button', () => {
  describe('with no props set', () => {
    it('should use default values', () => {
      const component = shallow(<Button>Bazzinga!</Button>);

      expect(component).toMatchInlineSnapshot(`
        <button
          className="button size--medium shape--primary"
        >
          Bazzinga!
        </button>
      `);
    });
  });

  describe('with "size" and "shape" props set', () => {
    it('should set corresponding classes', () => {
      const component = shallow(
        <Button shape='secondary' size='large'>
          Bazzinga!
        </Button>,
      );

      expect(component).toMatchInlineSnapshot(`
        <button
          className="button size--large shape--secondary"
        >
          Bazzinga!
        </button>
      `);
    });
  });
});
