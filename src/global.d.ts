import 'enzyme';

declare module 'enzyme' {
  interface ShallowWrapper {
    findByTestId(testId: string): ShallowWrapper<any, any>;
    find(selector: string): ShallowWrapper<any, any>;
  }
  interface ReactWrapper {
    findByTestId(testId: string): ReactWrapper<any, any>;
    find(selector: string): ReactWrapper<any, any>;
  }
}
