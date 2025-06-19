import React from 'react';

const mockNavigate = jest.fn();

// Reset function to clear mocks between tests
const resetMocks = () => {
  mockNavigate.mockClear();
};

// Export the mock navigate function so tests can access it
export { mockNavigate, resetMocks };

// Mock all the components and hooks from react-router-dom
export const useNavigate = () => mockNavigate;
export const useLocation = () => ({ pathname: '/' });
export const useParams = () => ({});
export const useSearchParams = () => [new URLSearchParams(), jest.fn()];

export const MemoryRouter = ({ children }) => <div data-testid="memory-router">{children}</div>;
export const BrowserRouter = ({ children }) => <div data-testid="browser-router">{children}</div>;
export const Routes = ({ children }) => <div data-testid="routes">{children}</div>;
export const Route = ({ children }) => <div data-testid="route">{children}</div>;
export const Navigate = ({ to }) => <div data-testid="navigate" data-to={to} />;
export const Link = ({ children, to, ...props }) => (
  <a href={to} {...props} data-testid="link">
    {children}
  </a>
);
export const NavLink = ({ children, to, ...props }) => (
  <a href={to} {...props} data-testid="navlink">
    {children}
  </a>
);

export default {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  MemoryRouter,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
};