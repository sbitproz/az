import { expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';



expect.extend(matchers);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
