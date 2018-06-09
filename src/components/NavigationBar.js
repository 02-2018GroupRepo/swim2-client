import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends Component{

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      isAuth: this.props.isAuth
    }
  }

  
  _isAuthorized() {
    if (this.state.isAuth) {
      return (<React.Fragment> 
        <Link to="/dockdoor" >Receiving</Link>
        <Link to="/recieveasn">Shipping</Link>
        <Link to="/" onClick={this._logout}>Logout</Link>

        </React.Fragment>)
    } else {
      return (<React.Fragment>
        {/* <Link to="/signup">Sign Up</Link> */}
        <Link to="/login">Login</Link>
        </React.Fragment>)
    }
  }

  _logout = () => {
    localStorage.setItem('token', "");
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