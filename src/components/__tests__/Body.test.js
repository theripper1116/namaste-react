import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

import Body from "../Body";
import { FetchData } from "../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(FetchData);
    },
  });
});

export default global.fetch;

describe("Should check the Body Component", () => {
  it("Should load Body Component checking the heading count", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBe(3*(FetchData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants).length);
  });

  it("Should load Body Component with text Loading ...", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const image = screen.getAllByRole("img");
    expect(image.length).toBe((FetchData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants).length);
  });
});
