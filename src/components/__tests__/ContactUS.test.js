const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";

const { default: ContactUS } = require("../ContactUS");

describe("Should check all the elements inside ContactUs component", () => {
  test("Should check if the ContactUs component has Email Address text ", () => {
    render(<ContactUS />);
    const text = screen.getByText("Email address");
    expect(text).toBeInTheDocument();
  });
  test("Should check if the ContactUs page containes inputs", () => {
    render(<ContactUS />);
    const input = screen.getAllByRole("checkbox");
    expect(input.length).toBe(1);
  });
  test("Should check if the ContactUs page containes button", () => {
    render(<ContactUS />);
    const button = screen.getAllByRole("button");
    expect(button.length).toBe(1);
  });
});
