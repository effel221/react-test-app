import {useDebounce} from "../debounce";
import {renderHook} from "@testing-library/react";
import React from 'react'
import {waitFor} from "@testing-library/dom";



describe('test debounce hook',  () => {

    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout',null);
    });

    const callUseDebounceFirst = async (value, delay) => {
        const {result, rerender} = await renderHook((props)=>useDebounce(props || value, delay));
        expect(result.current).toBe("")
        await waitFor(() => {
            expect(result.current).toBe(value);
        })
        expect(setTimeout).toHaveBeenCalled();
        return {result, rerender}
    };

    test('render useDebounce once', async () => {
        await callUseDebounceFirst("test value1", 500);
    });

    test('render useDebounce twice with different props', async () => {
        const {result, rerender} = await callUseDebounceFirst("test value1", 500);
        rerender("test value2")
        await waitFor(() => {
            expect(result.current).toBe("test value2");
        })
        expect(setTimeout).toHaveBeenCalled();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })
})

