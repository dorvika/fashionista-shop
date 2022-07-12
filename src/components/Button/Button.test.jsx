import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button /> component", () => {
  it("should render button tag", () => {
    render(<Button>Confirm</Button>);
    screen.getByRole("button");
  });
  it("should render button with text", () => {
    render(<Button>Buy</Button>);
    screen.getByText(/buy/i);
  });
  it("should pass onClick if button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should match snapshot", () => {
    const { container } = render(<Button>Confirm</Button>);
    expect(container).toMatchSnapshot();
  });
});
