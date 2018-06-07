
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class SignUp extends Component{
	constructor(props){
		super(props);
		console.log(props);
		this.handleSignup = this.handleSignup.bind(this);
	}

	handleSignup(event){
		event.preventDefault();

		const email = document.getElementById('email').value;
		const password = document.getElementById('pwd').value;
		const username = document.getElementById('username').value;
		
		const role = document.getElementById('role').value;
		
		const signupRequest = axios({
			method: "POST",
			
			data: {
				email,
				password,
				username,
				role,
				
			}
		});

		signupRequest.then((signupData)=>{
			if(signupData.data.msg === "signupSuccess"){
				localStorage.setItem('token', signupData.data.token);
				this.props._isAuthHandler();
				this.props.props.history.push('/')
			}
		})

	}

	render(){
		return(
			<div className="col-sm-offset-3 col-sm-6">
			<div className="signUpText">
			<p>Please Sign up  <br />
			*** All fields are required.</p>
			</div>
			<form onSubmit={this.handleSignup}>
			<div className = "form-group">
			<label htmlFor="email">Email Address:</label>
			<input type="email" className="form-control" id="email"/>
			</div>
			<div className="form-group">
			<label htmlFor="pwd">Password:</label>
			<input type="password" className="form-control" id="pwd"/>
			</div>
			
			<div className="form-group">
			<label htmlFor="username">User Name:</label>
			<input type="text" className="form-control" id="username"/>
			</div>
			<div className="form-group">
			<label htmlFor="role">Role:</label>
			<input type="role" className="form-control" id="role"/>
			</div>
			
			<button type="submit" className="btn btn-default">Sign Up</button>
			</form>
			</div>
			)
	}
}

export default SignUp;