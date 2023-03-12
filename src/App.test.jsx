import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Home from './components/Home';

test('loads and displays Home', async () => {
  // ARRANGE
  render(<Home />);

  // ACT

  await screen.findByRole('heading');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome to my shop');
  expect(screen.getByRole('button')).toHaveTextContent('Browse the store');
});
