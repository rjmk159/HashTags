import { combineReducers } from 'redux';
import dataLogin from './Login/slices';
import dataMain from './Main/slices';
import dataSidebar from './Dashboard/slices'

const rootReducer = combineReducers({
  dataMain,
  dataLogin,
  dataSidebar
});

export default rootReducer;
