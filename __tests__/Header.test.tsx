// filepath: __tests__/Header.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';

test('renders header with navigation', () => {
  render(<Header />);
  expect(screen.getByText('胡威宝会计税务所')).toBeInTheDocument();
  expect(screen.getByText('关于我们')).toBeInTheDocument();
});

test('toggles mobile menu', () => {
  render(<Header />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getAllByText('首页')).toHaveLength(2); // Both desktop and mobile
});