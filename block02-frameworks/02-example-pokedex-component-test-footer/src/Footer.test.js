import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the given text correctly', () => {
    render(<Footer copyright="this is some text" />);

    const footer = screen.getByTestId("footer");

    expect(footer.textContent).toBe("this is some text");
  });
});