import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Homepage from './components/Homepage';
import RecieveASN from './components/RecieveASN';
import Searchbar from './components/Searchbar';
import NavigationBar from './components/NavigationBar';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';




class App extends Component {


  _isAuthHandler = (auth=true) => {
    this.setState({
      isAuth: auth
    })
  }    
     

  render() {
    return (
             <Router>
             <div className ="container">
             <Route path='/login' component={(props) => <Login props={props} _isAuthHandler={this._isAuthHandler} /> }/>
              <Route path='/signup' component={(props) => <SignUp props={props} _isAuthHandler={this._isAuthHandler} />} />
                <Route path='/homepage'  component={Header} />
             

              <Route path='/homepage'  component={Searchbar} />
              <Route path='/homepage'  component={Homepage} />
           
              <Route path='/recieveasn'  component={RecieveASN} />

              <div class="footer">
                  <h1>Group members:</h1>
                  <p class="p1"> Tyler Campbell, NaDario M. Seays, John Hill, Shane Hall and Aleya Chowdhury</p>
                  <p class="p2">@ 2018 Only for demo purpose We built a Inventory Management System, user can easily find out recieving, shipping information of products.
                      To build this website we use React, Spring and it is based  on mySQL database</p>                            
              </div>
              </div>
             

             </Router>
    
    );
  }
}

export default App;
