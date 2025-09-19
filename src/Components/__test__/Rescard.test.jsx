import { render, screen } from "@testing-library/react";
import Res_Card from "../Res_Card";
import resMockData from "../mockdata/resCard.json";
import "@testing-library/jest-dom";

it("should render the name of restaurant card", () => {
  render(<Res_Card resData={{ info: resMockData }} />);

  const resName = screen.getByText("Chinese Wok");

  expect(resName).toBeInTheDocument();
});
