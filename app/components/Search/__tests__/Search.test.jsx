import {fireEvent, render, screen} from "@testing-library/react";
import Search from "../Search";
import {renderWithProviders} from "../../../lib/renderWithProviders";


it("render Search component and check change event", () => {
  renderWithProviders(<Search />)
  const input = screen.getByRole('searchbox')
  fireEvent.change(input, {target: {value: '23'}})
});
