import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render restaurantList component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RestaurantMenu />
      <Cart />
    </Provider>
  );

  const recommended = screen.getByText("Recommended (4)");
  expect(recommended).toBeInTheDocument();
  fireEvent.click(recommended);

  const itemList = screen.getAllByTestId("itemList");
  expect(itemList.length).toBe(4);

  const addButton = screen.getAllByRole("button", { name: "Add" });
  expect(addButton.length).toBe(4);
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  fireEvent.click(addButton[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addButton[1]);

  const cartItems = screen.getByText("Cart - (2 items)");
  expect(cartItems).toBeInTheDocument();

  fireEvent.click(cartItems);
  expect(screen.getByText("Cart Page")).toBeInTheDocument();
  const clearButton = screen.getByRole("button", { name: "Clear Cart" });
  expect(clearButton).toBeInTheDocument();

  fireEvent.click(clearButton);
  expect(screen.getByText("No items in the cart")).toBeInTheDocument();
});
