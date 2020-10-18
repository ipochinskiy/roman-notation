import 'jest-extended';
import 'jest-enzyme';

import { configure, ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import snapshotDiff from 'snapshot-diff';

configure({ adapter: new Adapter() });

// SETTING SERIALIZERS
const enzymeToJsonSerializer = createSerializer({ ignoreDefaultProps: true });
snapshotDiff.setSerializers([
  enzymeToJsonSerializer, // using enzymes serializer instead
]);
expect.addSnapshotSerializer(enzymeToJsonSerializer as any);

// EXTENDING EXPECT
expect.extend({
  toMatchDiffSnapshot(...params) {
    // setting default toMatchDiffSnapshot options: https://github.com/jest-community/snapshot-diff#options
    // eslint-disable-next-line no-param-reassign
    params[2] = {
      ...params[2],
      contextLines: 0,
      stablePatchmarks: true,
    };
    return snapshotDiff.toMatchDiffSnapshot.call(this, ...params);
  },
});

// EXTENDING ENZYME'S WRAPPERS
// both for shallow and mount rendering
ShallowWrapper.prototype.findByTestId = function findByTestId(testId: string) {
  return (this as ShallowWrapper).find(`[data-testid="${testId}"]`);
};
ReactWrapper.prototype.findByTestId = function findByTestId(testId: string) {
  return (this as ReactWrapper).find(`[data-testid="${testId}"]`);
};
