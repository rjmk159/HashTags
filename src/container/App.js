import React, { Component } from "react";
import Header from '../components/Header';
import Search from '../components/Search';
import RecentHashtags from '../components/RecentHashtags';
import Footer from '../components/Footer';
import api from "../utils/apiServices";
import { connect } from 'react-redux';
import { toggleLoader } from '../redux/action';
const loaderImage =  '/public/images/loader.gif';

class App extends Component {
  constructor() {
    super();
    this.state={
      listOfHashtags :[],
      completeHashTagsList:[]
    }
  }
  componentDidMount(){
    this.props.toggleLoader(true);
    setTimeout(() => {
      this.getHashtags();
    }, 500);
  }
  getHashtags=()=>{
    api.get('/public/tweets.json').then((res)=>{
      this.setState({listOfHashtags:res.data.list,completeHashTagsList:res.data.list})
      this.props.toggleLoader(false);
    })
  }

  searchHashtag=(str)=>{
    str = str.toLowerCase();
    const regex = new RegExp(str);
    let listOfHashtags = this.state.completeHashTagsList;
    let _listOfHashtags = listOfHashtags.filter((item)=>{return item.u.toLowerCase().match(regex)})
    this.setState({ listOfHashtags:_listOfHashtags })
  }

  render() {
    console.log(this.props)
  let {showLoader} = this.props;
    return (
      <div className="main-app">
        <Header/>
        <div className="wrapper">
          <Search searchHashtag={(str)=>this.searchHashtag(str)}/>
          <div className="row">
              { showLoader ? <img className="loader" src={loaderImage} /> : <RecentHashtags listOfHashtags={this.state.listOfHashtags} /> }
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  toggleLoader: (status) => dispatch(toggleLoader(status))
 })
 export default connect(mapStateToProps, mapDispatchToProps)(App);
