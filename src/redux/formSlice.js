import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {},
  },
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;
