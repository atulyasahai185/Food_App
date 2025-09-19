import { render, screen } from "@testing-library/react";
import About from "../Pages/About";
import "@testing-library/jest-dom";

test("testing of about us header", () => {
  render(<About />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("testing of input of about us page", () => {
  render(<About />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("testing of input boxes", () => {
  render(<About />);
  const inputBox = screen.getAllByRole("textbox");

  expect(inputBox).toHaveLength(2);
});

test("testing of input placeholder", () => {
  render(<About />);
  const placeholder = screen.getByPlaceholderText("name");

  expect(placeholder).toBeInTheDocument();
});
