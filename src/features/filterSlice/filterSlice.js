import { getVideos } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    searched: ''
};


const filterSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        tagSelection: (state, action) => {
            state.tags.push(action.payload)
        },
        tagRemove: (state, action) => {
            const tagIndex = state.tags.indexOf(action.payload)
            //index num return korbe
            if (tagIndex !== -1) {
                //splice(5,1) 5 no index e taka value remove korbe
                state.tags.splice(tagIndex, 1)
            }
        },
        searched: (state, action) => {
            state.searched = action.payload
        }
    }

});
export const { searched, tagSelection, tagRemove } = filterSlice.actions
export default filterSlice.reducer;
