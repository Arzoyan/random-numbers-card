import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const addCard = screen.getByTestId("add-card");
  expect(addCard).toBeInTheDocument();

  const sortCard = screen.getByTestId("sort-cards");
  expect(sortCard).toBeInTheDocument();
});
