const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    searchText: ''
};


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelection: (state, action) => {
            state.tags.push(action.payload)
        },
        tagRemove: (state, action) => {
            const tagIndex = state.tags.indexOf(action.payload)
            //indexOf num return korbe
            if (tagIndex !== -1) {
                //splice(5,1) 5 no index e taka value remove korbe
                state.tags.splice(tagIndex, 1)
            }
        },
        searched: (state, action) => {
            state.searchText = action.payload
        }
    }

});
export const { searched, tagSelection, tagRemove } = filterSlice.actions
export default filterSlice.reducer;
