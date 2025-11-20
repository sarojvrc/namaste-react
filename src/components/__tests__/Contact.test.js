import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test("Should load the button", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact Component", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Enter your name");
    const numberInput = screen.getByPlaceholderText("Enter your number");
    const cityInput = screen.getByPlaceholderText("Enter your city");
    expect(nameInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
  });

  test("Should load 3 input boxes inside the Contact Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes).toHaveLength(3);
  });
});
