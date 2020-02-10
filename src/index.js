import React  from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from "./container/App";
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import Single from "./container/Single";
import '../src/assets/css/style.min.css';
import '../src/assets/scss/style.scss';


const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/single" component={Single} />
    </div>
  </Router>
)
ReactDOM.render(<Provider store={configureStore()}>{routing}</Provider>, document.getElementById("container")) 