import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AppState } from "../lib/store";
import {SearchCacheType} from "../lib/usePackageSearch";

// ## FetchCacheState Interface
export interface FetchCacheState {
    searchCache: SearchCacheType;
    totalPagesFetched: number;
}

// ## Define the initial state of Fetch Cache
const initialState: FetchCacheState = {
    searchCache: {},
    totalPagesFetched: 100
};

export const fetchCacheSlice = createSlice({
    name: "fetchCache",
    initialState,
    reducers: {
        setSearchCache: (state: FetchCacheState, action: PayloadAction<SearchCacheType>) => {
            state.searchCache = action.payload;
        },
        setTotalPagesFetched: (state: FetchCacheState, action: PayloadAction<number>) => {
            state.totalPagesFetched = action.payload;
        }
    }
});

export const { setSearchCache, setTotalPagesFetched } = fetchCacheSlice.actions;

export const getFetchCache = (state: AppState) => state?.fetchCache?.searchCache;
export const getTotalPagesFetched = (state: AppState) => state?.fetchCache?.totalPagesFetched;

export default fetchCacheSlice.reducer;
