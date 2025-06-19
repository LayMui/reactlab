import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Registration from './Registration';
import { mockNavigate, resetMocks } from './__mocks__/react-router-dom';

jest.setTimeout(30000);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock the validateEmail util to always return true
jest.mock('./utils', () => ({
  validateEmail: jest.fn(() => true),
}));

// Import the mocked function so we can control it
import { validateEmail } from './utils';

// Tell Jest to use our manual mock
jest.mock('react-router-dom');

describe('Registration form', () => {
  let user;

  beforeEach(() => {
    resetMocks();
    user = userEvent.setup();
    // Ensure the mock returns true for all tests
    validateEmail.mockReturnValue(true);
  });

  test('renders all form fields and submit button disabled initially', () => {
    render(<Registration />);

    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Role/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /create account/i });
    expect(submitBtn).toBeDisabled();
  });

  test('enables submit button when form is valid and dirty', async () => {
    render(<Registration />);

    // Ensure mock is working
    validateEmail.mockReturnValue(true);

    // Fill out ALL form fields
    await user.type(screen.getByPlaceholderText(/First name/i), 'John');
    await user.type(screen.getByPlaceholderText(/Last name/i), 'Doe');
    
    // Clear and retype email to trigger validation
    const emailInput = screen.getByPlaceholderText(/Email address/i);
    await user.clear(emailInput);
    await user.type(emailInput, 'john@example.com');
    
    await user.type(screen.getByPlaceholderText(/Password/i), 'password123');
    await delay(200);
    
    const roleSelect = screen.getByRole('combobox');
    await user.selectOptions(roleSelect, 'individual');
    await delay(500);

    // Debug: Check validation state
    // console.log('validateEmail mock called:', validateEmail.mock.calls.length, 'times');
    // console.log('validateEmail mock calls:', validateEmail.mock.calls);
    
    // Wait for email error to disappear
    await waitFor(() => {
      const emailError = screen.queryByText('Invalid email');
      expect(emailError).not.toBeInTheDocument();
    }, { timeout: 5000 });

    await waitFor(() => {
      const submitButton = screen.getByRole('button', { name: /create account/i });
      expect(submitButton).toBeEnabled();
    }, { timeout: 10000 });
  });

  test('submits form and navigates on valid submission', async () => {
    render(<Registration />);
    
    // Fill out ALL form fields
    await user.type(screen.getByPlaceholderText(/First name/i), 'John');
  
    await user.type(screen.getByPlaceholderText(/Last name/i), 'Doe');
    
    await user.type(screen.getByPlaceholderText(/Email address/i), 'john@example.com');
    
    await user.type(screen.getByPlaceholderText(/Password/i), 'password123');
    
    const roleSelect = screen.getByRole('combobox');
    await user.selectOptions(roleSelect, 'individual');
  
    // Wait for form to become valid
    await waitFor(() => {
      const submitButton = screen.getByRole('button', { name: /create account/i });
      expect(submitButton).toBeEnabled();
    }, { timeout: 10000 });

    const submitButton = screen.getByRole('button', { name: /create account/i });

    // Submit the form
    await user.click(submitButton);
    await delay(500);

    // Check that navigation was called
    // Check that navigation was called with the correct route
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/welcome');
    }, { timeout: 10000 });
  });
});