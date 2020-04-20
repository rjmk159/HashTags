import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './Main';
import './_styles/grid.scss';
import './_styles/common.scss';


const domTargetElement = document.getElementById('container');
if (domTargetElement) {
  ReactDOM.render(
    <Provider store={store}>
      <Main status ={true}/>
    </Provider>,
    domTargetElement
  );
}
if (module.hot) {
  module.hot.accept();
}
