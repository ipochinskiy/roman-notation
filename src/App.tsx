import React from 'react';

import { LayoutContainer } from './layout';
import { ConverterPage } from './pages';

export const App: React.FC = () => {
  return (
    <LayoutContainer>
      <ConverterPage />
    </LayoutContainer>
  );
};
