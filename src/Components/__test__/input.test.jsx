import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import resList from "../mockdata/resList.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

it("should render body compnent with search button", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const inputText = await screen.findByRole("button", { name: /search/i });

  expect(inputText).toBeInTheDocument();
});
