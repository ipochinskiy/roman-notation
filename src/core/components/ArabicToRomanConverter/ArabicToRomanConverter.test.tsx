import React from 'react';
import { shallow } from 'enzyme';

import { useRomanConverter } from '../../hooks/use-roman-converter';

import { ArabicToRomanConverter } from './ArabicToRomanConverter';

jest.mock('../../hooks/use-roman-converter');

describe('ArabicToRomanConverter', () => {
  const setUpMocks = () => {
    const mockedConverter = {
      error: '',
      value: '',
      toRoman: jest.fn(),
    };
    (useRomanConverter as jest.Mock).mockReturnValue(mockedConverter);

    return {
      mockedConverter,
    };
  };

  it('with no value should not render the info label', () => {
    const { mockedConverter } = setUpMocks();
    mockedConverter.value = '';

    const component = shallow(<ArabicToRomanConverter />);

    expect(component.findByTestId('info')).not.toExist();
  });

  it('with a value should render it', () => {
    const { mockedConverter } = setUpMocks();
    mockedConverter.value = 'bazzinga!';

    const component = shallow(<ArabicToRomanConverter />);

    expect(component.findByTestId('info')).toMatchInlineSnapshot(`
      <div
        className="info"
        data-testid="info"
      >
        <Text
          color="tertiary"
          size="small"
        >
          Roman notation:
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

    const component = shallow(<ArabicToRomanConverter />);

    expect(component.findByTestId('error')).not.toExist();
  });

  it('with error should render the error message', () => {
    const { mockedConverter } = setUpMocks();
    mockedConverter.error = 'bam';

    const component = shallow(<ArabicToRomanConverter />);

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

    const component = shallow(<ArabicToRomanConverter />);
    component.findByTestId('arabic-input').simulate('change', 'new and shiny');

    expect(mockedConverter.toRoman).toHaveBeenCalledWith('new and shiny');
  });
});
