import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { url } from '../config';

class Login extends Component{
	constructor(props){
		super(props);
		this.handlelogin = this.handlelogin.bind(this);
	}
	handlelogin(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginRequest = axios({
      method: "POST",
      url: `${url}/login`,
      data: {
        username,
        password
      }
    });

    loginRequest.then((loginData)=>{
			console.log(loginData);
    	if (loginData.data.role !== "invalid"){
    		localStorage.setItem('role', loginData.data.role);
    		this.props._isAuthHandler();
    		this.props.props.history.push('/homepage');
    	} else {
				alert("invalid password");
			}
    })

}

render(){

	return(
	 <div className="col-sm-offset-3 col-sm-6">
		<p>Please Login</p>

		<form onSubmit ={this.handlelogin}>
		  <div className="form-group">
		        <label htmlFor ="username">username: </label>
		        <input type="text" className ="form-control" id ="username"/>
		      </div>
		   <div className ="form-group">
		          <label htmlFor ="password">Password: </label>
		        <input type="password" className ="form-control" id ="password"/>
		        </div>
		   <button type ="submit" className="btn btn-default">Submit</button>
		   <div className ="signup">
                    <Link to="/signup">Click here to Sign Up.</Link> 
           </div>

		   </form>
		   </div>
      )
   }
}

export default Login;