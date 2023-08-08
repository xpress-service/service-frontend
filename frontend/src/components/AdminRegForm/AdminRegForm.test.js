import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationFormContainer from './RegistrationFormContainer';

describe('RegistrationFormContainer', () => {
  test('renders Page 1 fields', () => {
    render(<RegistrationFormContainer />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
  });

  test('renders Page 2 fields', () => {
    render(<RegistrationFormContainer />);
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
  });

  test('submits the form', () => {
    render(<RegistrationFormContainer />);
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const nextButton = screen.getByText('Next');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.click(nextButton);

    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const zipCodeInput = screen.getByLabelText(/Zip Code/i);
    const submitButton = screen.getByText('Submit');

    fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(zipCodeInput, { target: { value: '10001' } });
    fireEvent.click(submitButton);

    // Test form submission logic here, e.g., mocking a server response and checking form data.
  });
});
