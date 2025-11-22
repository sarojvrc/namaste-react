import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurant cards for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole("button", { name: "Search" });
  const filterSearchButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  const usernameLabel = screen.getByText("User name:");
  const searchInput = screen.getByPlaceholderText("Search restaurant");
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
  expect(usernameLabel).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(filterSearchButton).toBeInTheDocument();
});

it("Should render top rated restaurants only", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedRestaurantButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  fireEvent.click(topRatedRestaurantButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(4);
});
