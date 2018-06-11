import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isAuth: this.props.isAuth
    }
  }

  
  _isAuthorized() { 
    if (this.state.isAuth && localStorage.getItem("role") === "admin") {
      return (<React.Fragment> 
        <Link to="/adddockdoor">Add Dock Door</Link>
        <Link to="/dockdoor">Receiving</Link>
        <Link to="/outbound">Outbound</Link>

        <Link to="/" onClick={this._logout}>Logout</Link>

        </React.Fragment>)
    } else if(this.state.isAuth && localStorage.getItem("role") === "user") {
       return (<React.Fragment>
       <Link to="/dockdoor">Receiving</Link>
        <Link to="/outbound">Outbound</Link>

        <Link to="/" onClick={this._logout}>Logout</Link>
        </React.Fragment>)
    }

    else {
      return (<React.Fragment>
        {/* <Link to="/signup">Sign Up</Link> */}
        <Link to="/login">Login</Link>
        </React.Fragment>)
    }
  }

  _logout = () => {
    localStorage.removeItem('role');
    this.props._isAuthHandler(false);
    this.setState({
      isAuth: false
    })
  }
   


  render(){
    return(
      <div className="navLinks" id="THD">
      <div>
      
      {this._isAuthorized()}
      </div>
      </div>
      ) 
  }
}

export default NavigationBar;