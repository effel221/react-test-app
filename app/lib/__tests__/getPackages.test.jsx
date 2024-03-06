import React from 'react'
import {waitFor} from "@testing-library/dom";
import {getPackages} from "../getPackages";




export const mockCardResponse = [{
    name: 'mockpack',
    description: 'mockpack description',
    rank: '23',
    stars: '17'
}];

const mockResponse = {
    headers: { get: () => ({total: 25})},
    json: jest.fn().mockResolvedValue(mockCardResponse)
}

describe('test getPackages util',  () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
              json: () => Promise.resolve(mockResponse),
          })
        );
    });

    test('getPackages throw error in case of error', async () => {
       const result = await getPackages(null, "", 1, jest.fn, null, null);
        await waitFor(() => {
            expect(result).toBe(undefined);
        })
    });

    test('getPackages return store with data with correct parameters', async () => {
        const value = "web";
        const sort = "stars";
        const page = 1;
        const result = await getPackages(value, sort, page, jest.fn, {}, jest.fn);
        await waitFor(() => {
            expect(result).toHaveProperty(`${value}-${sort}-${page}`);
        })
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
})

