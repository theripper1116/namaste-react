import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import RestaurentMenuDetail from "../RestaurentMenuDetail";
import RestaurentMenu from "../RestaurentMenu";
import RestaurentMenuCategory from "../RestaurentMenuCategory";
import appStore from "../../utils/appStore";
import { RestaurentMenuData } from "../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurentMenuData);
    },
  });
});

it("Should check whether the Cart is updated or not with no. of items", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurentMenu>
          <RestaurentMenuCategory>
            <RestaurentMenuDetail />
          </RestaurentMenuCategory>
        </RestaurentMenu>
      </Provider>
    );
  });
  const accordionHeaderText = screen.getByText("Pot Rice (3)");
  console.log(accordionHeaderText);
  fireEvent.click(accordionHeaderText);
  const items = screen.getAllByTestId("item-list");
  console.log(items.length);
  expect(items.length).toBe(28);
});
