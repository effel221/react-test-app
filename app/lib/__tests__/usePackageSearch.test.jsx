import React from 'react'
import {renderHook} from "@testing-library/react";
import {waitFor} from "@testing-library/dom";
import * as PackageData from "../usePackageSearch";
import {createWrapper} from "../renderWithProviders";
import {makeStore} from "../store";



const {usePackageSearch, getPackages} = PackageData;



describe('test usePackageSearch hook',  () => {
  test('return empty array if no value provided', async () => {
    const store = makeStore({})
    const wrapper = createWrapper(store)
    const initialProps = {value: null, setIsLoading: jest.fn(), isSortedByStars: false,
      page: 1, setPageNumber: jest.fn() }
    const {result} = await renderHook(usePackageSearch, {
      initialProps,
      wrapper
    });

    await waitFor(() => {
      expect(result.current).toStrictEqual([]);
    })
  });
})

