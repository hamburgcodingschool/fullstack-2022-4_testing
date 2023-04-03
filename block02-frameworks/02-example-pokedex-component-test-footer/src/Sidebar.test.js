import { render, screen } from '@testing-library/react';
import Sidebar from "./Sidebar";
import '@testing-library/jest-dom'

describe('Sidebar', () => {
  it("renders a menu from the given object", () => {
    const menu = [
      { text: "Start", target: "start" },
      { text: "One", target: "one" },
      { text: "Two", target: "two" },
      { text: "Three", target: "three" },
      { text: "Four", target: "four" },
    ];
    const { container } = render(<Sidebar menu={menu} />);
    const menuItems = container.querySelectorAll('li');

    expect(menuItems.length).toBe(5);
    expect(menuItems[0]).toHaveTextContent("Start");
    expect(menuItems[1]).toHaveTextContent("One");
    expect(menuItems[2]).toHaveTextContent("Two");
    expect(menuItems[3]).toHaveTextContent("Three");
    expect(menuItems[4]).toHaveTextContent("Four");
  });
});