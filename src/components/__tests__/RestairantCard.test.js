import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import RESTAURANT_MOCK from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component", () => {
  render(<RestaurantCard resData={RESTAURANT_MOCK} />);
  const restaurantName = screen.getByText("Sri Laksmi Vaibhava");
  expect(restaurantName).toBeInTheDocument();
});

it("Should load cusins in the component", () => {
  render(<RestaurantCard resData={RESTAURANT_MOCK} />);
  const cusins = screen.getByText(
    "Chinese, Jain, North Indian, South Indian, Sweets"
  );
  expect(cusins).toBeInTheDocument();
});

it("Should load the star ratings in the component", () => {
  render(<RestaurantCard resData={RESTAURANT_MOCK} />);
  const ratings = screen.getByText("4.6 stars");
  expect(ratings).toBeInTheDocument();
});
