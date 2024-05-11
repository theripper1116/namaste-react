import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

import Body from "../Body";
import fetch from "../mocks/mockFunc";

it("Should load Body Component with text Loading ...", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const heading = screen.getAllByRole("heading");
  expect(heading.length).toBe(60);
});
