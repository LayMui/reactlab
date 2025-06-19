// setupTests.js
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-testid' });

// Suppress the specific warning
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes('ReactDOMTestUtils.act')) {
    return;
  }
  originalError(...args);
};