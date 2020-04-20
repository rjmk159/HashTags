import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../_utils/api";

const { actions, reducer } = createSlice({
  name: "dataLogin",
  initialState: {
    token: "",
    isLoading: false,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload.token;
    },
    setLoader: (state, { payload }) => {
      state.isLoading = payload.status;
    },
  },
});
export default reducer;
export const { setToken } = actions;

export const checkLogin = (email, password, callback) => (dispatch) => {
  try {
    login(email, password)
      .then((res) => {
        if (res.data.ok) {
          dispatch(setToken({ token: res.data.result }));
          callback(false);
        }
      })
      .catch((_error) => {
        callback(true);
      });
  } catch (_error) {}
};

export const registerUser = (obj, callback) => (dispatch) => {
  try {
    register(obj)
      .then((res) => {
        if (res.data.ok) {
          dispatch(setLoader(false));
          callback(false);
        }
      })
      .catch((_error) => {
        callback(true);
      });
  } catch (_error) {}
};
