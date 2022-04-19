import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async function (_, {rejectWithValue}) {

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=london&client_id=TMfitJcpO39Gi4zOEvkuYLNSsU0rudq1zgBq2xYJWDI&per_page=24`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const fetchPhotosId = createAsyncThunk('idItem/fetchPhotosId', async function (photoId, {rejectWithValue}) {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=london&client_id=TMfitJcpO39Gi4zOEvkuYLNSsU0rudq1zgBq2xYJWDI&per_page=${photoId}`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        return rejectWithValue(error.message);
    }

});
const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}
const photosSlice = createSlice({
    name: 'photos', initialState: {
        photos: [], idItem: [], status: null, error: null,

    }, reducers: {

        removeList: (state) => {
            state.idItem = {};
        }
    }, extraReducers: {
        [fetchPhotos.pending]: (state) => {
            state.status = 'loading'
        }, [fetchPhotos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.photos = action.payload;

        },


        [fetchPhotosId.pending]: (state) => {
            state.status = 'loading'
        }, [fetchPhotosId.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.idItem = action.payload;

        }, [fetchPhotosId.rejected]: setError, [fetchPhotos.rejected]: setError,

    },

});
export const {removeList} = photosSlice.actions;
export const selectPhotosId = state => state.photos.idItem;
export const selectPhotos = state => state.photos.photos;
export default photosSlice.reducer;