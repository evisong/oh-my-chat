import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

test('renders create thread button', async () => {
  render(<App />);
  const buttonElem = await screen.findByText(/新建对话/i);
  expect(buttonElem).toBeInTheDocument();
});
