const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";

const { default: ContactUS } = require("../ContactUS");

test("Check if the ContactUs component renders or not ", () => {
  render(<ContactUS />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
