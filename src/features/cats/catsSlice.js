import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../shared/api/api';

const initialState = {
  status: 'idle',
  allCatsList: [],
  favoritesCats: [],
  error: null,
};

export const loadCats = createAsyncThunk('cats/load-cats', async () => {
  const params = {
    limit: 15,
    page: 0,
  };

  const response = api.getCards(params.limit, params.page);
  return response;
});

export const catsSlice = createSlice({
  name: '@@cats',
  initialState,
  reducers: {
    toggleFavoritesCat: (state, action) => {
      const cat = action.payload;

      state.allCatsList.map((el) => {
        if (el.id === cat.id) {
          el.isLiked = !el.isLiked;
        }
      });

      state.favoritesCats = state.allCatsList.filter((el) => el.isLiked);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCats.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(loadCats.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(loadCats.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.allCatsList = action.payload.map((el) => ({
        ...el,
        isLiked: false,
      }));
    });
  },
});

export const catsReducer = catsSlice.reducer;
export const { toggleFavoritesCat } = catsSlice.actions;
