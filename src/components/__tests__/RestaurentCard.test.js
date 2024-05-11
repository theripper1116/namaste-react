import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { RestaurentCardMockData } from "../mocks/mockData";
import RestaurentCard from "../RestaurentCard";

describe("Should test whether the component is loaded with the Mock Data", () => {
  it("Should render the Restaurent Card component", () => {
    render(<RestaurentCard resData={RestaurentCardMockData} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
  });
  it("Should render the heading of the Restaurent Card component", () => {
    render(<RestaurentCard resData={RestaurentCardMockData} />);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBe(3);
  });
  it("Should render the image of the Restaurent Card component", () => {
    render(<RestaurentCard resData={RestaurentCardMockData} />);
    const image = screen.getAllByRole("img");
    expect(image.length).toBe(1);
  });
});
