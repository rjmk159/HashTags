import { createSlice } from '@reduxjs/toolkit';
import { upload ,list, download} from '../../_utils/api';
import store from '../../store';

const { actions, reducer } = createSlice({
  name: 'dataSidebar',
  initialState: {
    active: 'Letters',
    filesList:[],
    filesListCopy:[]
  },
  reducers: {
    setSidebar: (state, { payload }) => {
      state.active = payload.status;
    },
    setList: (state, { payload }) => {
      state.filesList = payload;
      state.filesListCopy = payload;
    },
    setListWithOutCopy: (state, { payload }) => {
      state.filesList = payload;
    },
  }
});

export default reducer;

export const {
  setSidebar,
  setList,
  setListWithOutCopy
} = actions;

export const setActiveSidebar = (data) =>  (dispatch) => {
  dispatch(setSidebar({ status: data }));
};

export const searchList = (value) =>  (dispatch) => {
  let state = { ...store.getState() };
  if(value) {
    let regex = new RegExp(value.toLowerCase());
    var array = state.filesListCopy.filter((item)=>regex.test(item.originalName.toLowerCase()))
    dispatch(setListWithOutCopy( array ));
  } else {
    dispatch(setListWithOutCopy( state.filesListCopy )); 
  }

};

export const uploadFile = (obj, authToken, callback) => (dispatch) => {
  try {
    upload(obj,authToken)
      .then((res) => {
        if (res.data.ok) {
          callback(false);
        }
      })
      .catch((_error) => {
        callback(true);
      });
  } catch (_error) {}
};

export const listFile = (authToken, callback) => (dispatch) => {
  try {
    list(authToken)
      .then((res) => {
        if (res.data.ok) {
          console.log(res)
          dispatch(setList(res.data.result))
        } else {
          callback(true);
        }
      })
      .catch((_error) => {
        callback(true);
      });
  } catch (_error) {}
};

export const downloadFile = (id,authToken, callback) => (dispatch) => {
  try {
    download(id,authToken)
      .then((res) => {
        if (res.data.ok) {
          console.log(res.data)
        } else {
          callback(true);
        }
      })
      .catch((_error) => {
        callback(true);
      });
  } catch (_error) {}
};
