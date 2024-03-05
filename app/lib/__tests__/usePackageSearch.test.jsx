import {useDebounce} from "../debounce";
import {renderHook} from "@testing-library/react";
import React from 'react'
import {waitFor} from "@testing-library/dom";
import {usePackageSearch} from "../usePackageSearch.tsx";



describe('test usePackageSearch hook',  () => {

  test('render useDebounce once', async () => {
    const initialProps = {value: "web", setIsLoading: jest.fn, }
    const {result, rerender} = await renderHook(usePackageSearch, {initialProps});
    await waitFor(() => {
      expect(result.current.value).toBe("test value1");
    })
  });

})

