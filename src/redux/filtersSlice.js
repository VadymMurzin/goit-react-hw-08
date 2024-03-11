import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterFiltration: (state, action) => {
      return state, action.payload;
    },
  },
});

export const { filterFiltration } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;