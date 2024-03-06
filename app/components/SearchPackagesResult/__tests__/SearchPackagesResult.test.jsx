import React, { useState as useStateMock } from 'react'
import {renderWithProviders} from "../../../lib/renderWithProviders";
import SearchPackagesResult from "../SearchPackagesResult";
import {screen} from "@testing-library/react";
import {usePackageSearch} from '../../../lib/usePackageSearch';
import {getPackages} from '../../../lib/getPackages';
import {mockCardResponse} from "../../../lib/mockData.jsx";


jest.mock('../../../lib/usePackageSearch', () => ({
  usePackageSearch: jest.fn(),
}));

jest.mock('../../../lib/getPackages', () => ({
  getPackages: jest.fn()
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('render SearchPackagesResult',  () => {

  const setState = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks();
    useStateMock.mockImplementation((init) => [init, setState])
    getPackages.mockImplementation(() => { return {'web-stars-1': mockCardResponse}})
  })

  it("render Loading component if data loading", () => {
    jest.spyOn(React, 'useState')
      .mockImplementationOnce(() => [true, () => true])
    const { container } = renderWithProviders(<SearchPackagesResult/>);
    expect(container.getElementsByClassName('loadingDataBlock').length).toBe(1);
  });

  it("render SearchPackagesResult component with data from fetch", () => {
    usePackageSearch.mockReturnValue(mockCardResponse);
    renderWithProviders(<SearchPackagesResult/>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.checked).toEqual(false);
    expect(screen.getByRole("heading")).toHaveTextContent("mockpack");
  });

  it("render SearchPackagesResult No data text if no data", () => {
    usePackageSearch.mockReturnValue([]);
    renderWithProviders(<SearchPackagesResult/>);
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
