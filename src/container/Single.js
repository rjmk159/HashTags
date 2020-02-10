import React, { Component } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

class Single extends Component {
  render() {
    console.log(this.props)
    let { history } = this.props
    let hashTag = history && history.location && history.location.item ? history.location.item.hashTag :''
    return (
      <div className="main-app">
        <Header/>
        <div className="wrapper">
          <div className="row">
              <h2>{hashTag}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eu odio eget hendrerit. Curabitur faucibus justo erat, nec sollicitudin ante accumsan vitae. Curabitur lacinia maximus nisi, ac viverra metus pharetra in. In finibus neque a viverra venenatis. Praesent maximus maximus dui non venenatis. Proin pulvinar hendrerit ante eu imperdiet. Ut vulputate at sapien sed porttitor. Etiam vel mollis erat. Nullam vel efficitur sem, eget luctus libero. Nunc nec elit vitae mi varius eleifend in sit amet lorem. Nullam rhoncus nulla eget pulvinar varius. <span>@Curabitur</span> non libero eros. Duis eget tristique diam. Nulla efficitur ornare cursus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eu odio eget hendrerit. Curabitur faucibus justo erat, nec sollicitudin ante accumsan vitae. Curabitur lacinia maximus nisi, ac viverra metus pharetra in. In finibus neque a viverra venenatis. Praesent maximus maximus dui non venenatis. Proin pulvinar hendrerit ante eu imperdiet. Ut vulputate at sapien sed porttitor. Etiam vel mollis erat. Nullam vel efficitur sem, eget luctus libero. Nunc nec elit vitae mi varius eleifend in sit amet lorem. Nullam rhoncus nulla eget pulvinar varius. Curabitur non <span>@libero</span> eros. Duis eget tristique diam. Nulla efficitur ornare cursus.</p>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Single;

