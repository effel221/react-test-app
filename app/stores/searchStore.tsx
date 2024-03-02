import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AppState } from "../lib/store";

// ## SearchState Interface
export interface SearchState {
    searchValue: string;
}

// ## Define the initial state of Cart State
const initialState: SearchState = {
    searchValue: ''
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchValue: (state: SearchState, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    }
});

export const { setSearchValue } = searchSlice.actions;

export const getSearchValue = (state: AppState) => state?.search?.searchValue;

export default searchSlice.reducer;
