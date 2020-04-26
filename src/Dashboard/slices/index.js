import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'dataDashboard',
  initialState: {
    active: 'Letters',
    isSideBar:true
  },
  reducers: {
    setSidebar: (state, { payload }) => {
      state.active = payload.status;
    },
    showSidebar: (state, { payload }) => {
      state.isSideBar = payload;
    },
  }
});

export default reducer;

export const {
  setSidebar,
  setList,
  setListWithOutCopy,
  showSidebar
} = actions;

export const setActiveSidebar = (data) =>  (dispatch) => {
  dispatch(setSidebar({ status: data }));
};