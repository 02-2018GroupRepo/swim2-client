import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
// import SignUp from './components/SignUp';
import Homepage from './components/Homepage';
import Outbound from './components/Outbound.js';
import RecieveASN from './components/RecieveASN';
import DockdoorModal from './components/DockdoorModal';
import AddDockDoor from './components/AddDockDoor';
import { BrowserRouter as Router, Route } from 'react-router-dom';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: localStorage.getItem("role") === "admin" || localStorage.getItem("role") === "user",
      dockdoorSelection: undefined
    }
  }


  _isAuthHandler = (auth=true) => {
    this.setState({
      isAuth: auth
    })
  }    
     
  _dropdownHandler = (dockdoor) => {
    
    this.setState({
      dockdoorSelection: dockdoor
    })

  }

  render() {
    return (
             <Router>
               <React.Fragment>
             <Route path='/'  component={(props) => this.state.isAuth && <Header isAuth={this.state.isAuth} />} />  
             <div className ="container">
             <Route exact path='/' component={(props) => !this.state.isAuth && <Login props={props} _isAuthHandler={this._isAuthHandler} isAuth={this.state.isAuth} /> }/>
              {/* <Route path='/signup' component={(props) => <SignUp props={props} _isAuthHandler={this._isAuthHandler} />} /> */}
              <Route path='/homepage'  component={(props) => <Homepage props={props} isAuth={this.state.isAuth} />} />
              
              <Route path='/dockdoor' component={(props) => <DockdoorModal props={props} _dropdownHandler={this._dropdownHandler} selection={this.state.dockdoorSelection} isAuth={this.state.isAuth} />} />
              <Route path='/recieveasn' component={(props) => <RecieveASN  props={props} dockdoor={this.state.dockdoorSelection} isAuth={this.state.isAuth} />} />
              <Route path='/outbound' component={(props) => <Outbound props={props} isAuth={this.state.isAuth} />} />
              <Route path='/adddockdoor' component={(props) => this.state.isAuth && <AddDockDoor props={props} isAuth={this.state.isAuth} />} />

              

              <div className="footer">
                  <h1>Group members:</h1>
                  <p className="p1"> Tyler Campbell, NaDario M. Seays, John Hill, Shane Hall and Aleya Chowdhury</p>
                  <p className="p2">@ 2018 Only for demo purpose We built a Inventory Management System, user can easily find out recieving, shipping information of products.
                      To build this website we use React, Spring and it is based  on mySQL database</p>                            
              </div>
              </div>
             
             </React.Fragment>
             </Router>
    
    );
  }
}

export default App;
