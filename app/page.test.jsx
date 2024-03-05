/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.");
});
