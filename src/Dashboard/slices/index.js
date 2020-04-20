import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'dataSidebar',
  initialState: {
    active: 'Letter',

  },
  reducers: {
    setSidebar: (state, { payload }) => {
      state.active = payload;
    },
  }
});

export default reducer;

export const {
  setSidebar
} = actions;

export const setActiveSidebar = (data) => async (dispatch) => {
  dispatch(setSidebar({ status: data }));
 
};