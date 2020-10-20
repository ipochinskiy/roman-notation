import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';

type PoorMansObject = Record<string, unknown>;

const createChangeEventMock = (options?: PoorMansObject) => {
  return {
    target: { value: 'Hello' },
    ...options,
  };
};

describe('Input', () => {
  const getTestProps = (options?: PoorMansObject) => ({
    type: 'email',
    value: 'bazzinga!',
    placeholder: '42',
    fullWidth: true,
    onChange: jest.fn(),
    ...options,
  });

  describe('with all props set', () => {
    it('should render correctly', () => {
      const props = getTestProps();

      const component = shallow(<Input {...props} />);

      expect(component).toMatchInlineSnapshot(`
        <input
          className="input input--fullWidth"
          onChange={[Function]}
          placeholder="42"
          type="email"
          value="bazzinga!"
        />
      `);
    });

    describe('when value gets changed', () => {
      it('should call "onChange" callback', () => {
        const props = getTestProps();
        const changeEvent = createChangeEventMock();
        const component = shallow(<Input {...props} />);

        component.find('input').simulate('change', changeEvent);

        expect(props.onChange).toHaveBeenCalledWith(changeEvent.target.value, changeEvent);
      });
    });
  });

  describe('without "type" prop set', () => {
    it('should use default value "text"', () => {
      const props = getTestProps();

      const component = shallow(<Input {...props} type={undefined} />);

      expect(component).toMatchInlineSnapshot(`
        <input
          className="input input--fullWidth"
          onChange={[Function]}
          placeholder="42"
          type="text"
          value="bazzinga!"
        />
      `);
    });
  });

  describe('without "fullWidth" prop set', () => {
    it('should ignore class for the full width', () => {
      const props = getTestProps();

      const component = shallow(<Input {...props} fullWidth={false} />);

      expect(component).toMatchInlineSnapshot(`
        <input
          className="input "
          onChange={[Function]}
          placeholder="42"
          type="email"
          value="bazzinga!"
        />
      `);
    });
  });
});
