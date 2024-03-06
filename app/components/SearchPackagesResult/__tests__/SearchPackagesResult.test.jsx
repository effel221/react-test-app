import {renderWithProviders} from "../../../lib/renderWithProviders";
import {mockCardResponse} from "../../../lib/__tests__/getPackages.test.jsx";
import SearchPackagesResult from "../SearchPackagesResult";
import {screen} from "@testing-library/react";
import {usePackageSearch} from '../../../lib/usePackageSearch';

jest.mock('../../../lib/usePackageSearch', () => ({
  usePackageSearch: jest.fn()
}));

describe('render SearchPackagesResult',  () => {

  it("render SearchPackagesResult component with data from fetch", () => {
    usePackageSearch.mockReturnValue(mockCardResponse);
    renderWithProviders(<SearchPackagesResult/>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.checked).toEqual(false);
    expect(screen.getByRole("heading")).toHaveTextContent("mockpack");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
