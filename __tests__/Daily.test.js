import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Daily from '../src/screens/daily'; // Update with the correct path
import { ProgressBar } from 'react-native-paper';

// Mock react-native-paper's ProgressBar
jest.mock('react-native-paper', () => ({
  ProgressBar: jest.fn(() => null),
}));

describe('Daily Activities Widget', () => {
  
  //Renders the greeting message (Good Morning) correctly
  test('renders greeting message correctly', () => {
    const { getByText } = render(<Daily />);
    expect(getByText('Good morning')).toBeTruthy();
  });

  //Displays the reminder button.
  test('renders reminder button', () => {
    const { getByText, getByTestId } = render(<Daily />);
    expect(getByText('Set reminder')).toBeTruthy();

    const button = getByTestId('reminder-button');
    expect(button).toBeTruthy();
  });

  //Shows progress bar with correct progress
  test('renders progress bar with correct progress', () => {
    render(<Daily />);
    expect(ProgressBar).toHaveBeenCalledWith(
      expect.objectContaining({ progress: 0.1 }),
      {}
    );
  });

  //Renders all three activity sections (Morning, Afternoon, Evening).
  test('renders all activity sections: Morning, Afternoon, and Evening', () => {
    const { getByText } = render(<Daily />);
    
    expect(getByText('Morning')).toBeTruthy();
    expect(getByText('Afternoon')).toBeTruthy();
    expect(getByText('Evening')).toBeTruthy();
  });

  //Displays activity titles and descriptions.
  test('renders activities with correct titles and descriptions', () => {
    const { getByText } = render(<Daily />);
    
    expect(getByText('Dealing with Rejection')).toBeTruthy();
    expect(getByText('Learn to heal with and cope with being rejected')).toBeTruthy();

    expect(getByText('How to Fight Fairly')).toBeTruthy();
    expect(getByText('Learn how to have peaceful, constructive disagreements')).toBeTruthy();
    
    expect(getByText('Exploring Met and Unmet')).toBeTruthy();
    expect(getByText('Learn how to meet your emotional needs')).toBeTruthy();

    expect(getByText('Listening Empathetically')).toBeTruthy();
    expect(getByText('Learn the foundational skills of listening to others with empathy')).toBeTruthy();
  });

  //Verifies the footer quote is displayed.
  test('renders footer quote', () => {
    const { getByText } = render(<Daily />);
    expect(getByText(/I advise all of my clients to develop a consistent daily routine/i)).toBeTruthy();
  });

});
