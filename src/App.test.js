import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('calculates addition correctly', () => {
  render(<App />);
  fireEvent.change(screen.getByDisplayValue('0'), { target: { value: '5' } });
  fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: '+' } });
  fireEvent.change(screen.getAllByDisplayValue('0')[1], { target: { value: '3' } });
  fireEvent.click(screen.getByText('Calculate'));
  expect(screen.getByText(/Result:/).textContent).toBe('Result: 8');
});

test('calculates subtraction correctly', () => {
  render(<App />);
  fireEvent.change(screen.getByDisplayValue('0'), { target: { value: '5' } });
  fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: '-' } });
  fireEvent.change(screen.getAllByDisplayValue('0')[1], { target: { value: '3' } });
  fireEvent.click(screen.getByText('Calculate'));
  expect(screen.getByText(/Result:/).textContent).toBe('Result: 2');
});

test('calculates multiplication correctly', () => {
  render(<App />);
  fireEvent.change(screen.getByDisplayValue('0'), { target: { value: '5' } });
  fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: '*' } });
  fireEvent.change(screen.getAllByDisplayValue('0')[1], { target: { value: '3' } });
  fireEvent.click(screen.getByText('Calculate'));
  expect(screen.getByText(/Result:/).textContent).toBe('Result: 15');
});

test('calculates division correctly', () => {
  render(<App />);
  fireEvent.change(screen.getByDisplayValue('0'), { target: { value: '6' } });
  fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: '/' } });
  fireEvent.change(screen.getAllByDisplayValue('0')[1], { target: { value: '3' } });
  fireEvent.click(screen.getByText('Calculate'));
  expect(screen.getByText(/Result:/).textContent).toBe('Result: 2');
});

test('calculates modulus correctly', () => {
  render(<App />);
  fireEvent.change(screen.getByDisplayValue('0'), { target: { value: '5' } });
  fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: '%' } });
  fireEvent.change(screen.getAllByDisplayValue('0')[1], { target: { value: '3' } });
  fireEvent.click(screen.getByText('Calculate'));
  expect(screen.getByText(/Result:/).textContent).toBe('Result: 2');
});