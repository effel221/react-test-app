import {useDebounce} from "../debounce";
import {renderHook} from "@testing-library/react";
import React from 'react'
import {waitFor} from "@testing-library/dom";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout',null);

describe('test debounce hook',  () => {

    const callUseDebounceFirst = async () => {
        const initialProps = {value: "test value1"}
        const {result, rerender} = await renderHook(useDebounce, {initialProps});
        expect(result.current).toBe("")
        await waitFor(() => {
            expect(result.current.value).toBe("test value1")
        })
        expect(setTimeout).toHaveBeenCalled();
        return {result, rerender}
    };

    test('render useDebounce once', async () => {
        await callUseDebounceFirst();
    });

    test('render useDebounce twice with different props', async () => {
        const {result, rerender} = await callUseDebounceFirst();
        await rerender({value: 'test value2'})
        await waitFor(() => {
            expect(result.current.value).toBe("test value2")
        })
        expect(setTimeout).toHaveBeenCalled();
    });
})

