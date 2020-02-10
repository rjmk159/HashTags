import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
    <nav className="header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>#Tags</title>
        </Helmet>
      <span className="header-brand">Twitter Hashtags</span>
    </nav>
    );
  }
}

export default App;

