import { combineReducers } from 'redux';
import dataLogin from './Login/slices';
import dataDashboard from './Dashboard/slices'
import dataLetters from './Dashboard/Letters/slices';
import dataCirculars from './Dashboard/LatestCirculars/slices';
import dataOnlineForms from './Dashboard/LatestCirculars/slices'

const rootReducer = combineReducers({
  dataDashboard,
  dataLogin,
  dataLetters,
  dataCirculars,
  dataOnlineForms,
});

export default rootReducer;
