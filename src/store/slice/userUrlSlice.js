import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllUserUrls } from '../../api/auth'


export const fetchUserUrls = createAsyncThunk('userUrls/fetchUserUrls', async () => {
  const response = await getAllUserUrls();
  return response.urls
})

const userUrlsSlice = createSlice({
  name: 'userUrls',
  initialState: {
    urls: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserUrls.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUserUrls.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.urls = action.payload
      })
      .addCase(fetchUserUrls.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default userUrlsSlice.reducer
