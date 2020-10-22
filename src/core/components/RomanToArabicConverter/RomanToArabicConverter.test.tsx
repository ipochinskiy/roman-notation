import React from 'react';
import { shallow } from 'enzyme';

import { useMemoizedCallback } from '../../hooks/use-memoized-callback';

import { RomanToArabicConverter } from './RomanToArabicConverter';

jest.mock('../../hooks/use-memoized-callback');

describe('RomanToArabicConverter', () => {
  const setUpMocks = () => {
    const mockedConverter = {
      error: '',
      value: '',
      doMap: jest.fn(),
    };
    (useMemoizedCallback as jest.Mock).mockReturnValue(mockedConverter);

    return {
      mockedConverter,
    };
  };

  it('with no value should not render the info label', () => {
    const { mockedConverter } = setUpMocks();
    mockedConverter.value = '';

    const component = shallow(<RomanToArabicConverter />);

    expect(component.findByTestId('info')).not.toExist();
  });

  it('with a value should render it', () => {
    const { mockedConverter } = setUpMocks();
    mockedConverter.value = 'bazzinga!';

    const component = shallow(<RomanToArabicConverter />);

    expect(component.findByTestId('info')).toMatchInlineSnapshot(`
      <div
        className="info"
        data-testid="info"
      >
        <Text
          color="tertiary"
          size="small"
        >
          Arabic number:
        </Text>
        <Text
          color="tertiary"
          size="large"
        >
          bazzinga!
        </Text>
      </div>
    `);
  });

  it('with no error should not render the error caption', () => {
    const { mockedConverter } = setUpMocks();
    mockedConverter.error = '';

    const component = shallow(<RomanToArabicConverter />);

    expect(component.findByTestId('error')).not.toExist();
  });

  it('with error should render the error message', () => {
    const { mockedConverter } = setUpMocks();
    mockedConverter.error = 'bam';

    const component = shallow(<RomanToArabicConverter />);

    expect(component.findByTestId('error')).toMatchInlineSnapshot(`
      <div
        className="error"
        data-testid="error"
      >
        <Text
          color="danger"
        >
          bam
        </Text>
      </div>
    `);
  });

  it(`when input value changed should call "toRoman" hook's callback`, () => {
    const { mockedConverter } = setUpMocks();

    const component = shallow(<RomanToArabicConverter />);
    component.findByTestId('roman-input').simulate('change', 'new and shiny');

    expect(mockedConverter.doMap).toHaveBeenCalledWith('new and shiny');
  });
});
