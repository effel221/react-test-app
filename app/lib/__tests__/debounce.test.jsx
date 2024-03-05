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
        const initialProps = {value, delay}
        const {result, rerender} = await renderHook(useDebounce, {initialProps});
        expect(result.current).toBe("")
        await waitFor(() => {
            expect(result.current.value).toBe("test value1");
            expect(result.current.delay).toBe(500);
        })
        expect(setTimeout).toHaveBeenCalled();
        return {result, rerender}
    };

    test('render useDebounce once', async () => {
        await callUseDebounceFirst("test value1", 500);
    });

    test('render useDebounce twice with different props', async () => {
        const {result, rerender} = await callUseDebounceFirst("test value1", 500);
        await rerender({value: "test value2", delay: 1000})
        await waitFor(() => {
            expect(result.current.value).toBe("test value2");
            expect(result.current.delay).toBe(1000);
        })
        expect(setTimeout).toHaveBeenCalled();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })
})

