import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { url } from '../config';
import './login.css';

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

	const h1Styles = {color: "rgba(77, 80, 85, 0.842)", textAlign: "center", fontFamily: "'Russo One', sans-serif", fontSize: "36px"};
	const paragraphStyles = {color: "rgba(77, 80, 85, 0.842)", textAlign: "center", fontFamily: "'Russo One', sans-serif", fontSize: "15px"}    
	document.querySelector('body').style.backgroundColor = "#00A2FF";
	return( 
	 <div className="container-fluid">
	 <div className="icon">
	 		<i className="fas fa-warehouse"></i>
    </div>
		<h1 style={h1Styles}>SWIM</h1>
    <p style={paragraphStyles}>Integrated Warehouse Management System</p>
		<form onSubmit ={this.handlelogin} className="sign-in">
		  <div className="email">
		        <input type="text" placeholder="Email" className ="form-control" id ="username"/>
		      </div>
		   <div className ="password">
		        <input type="password" placeholder="Password" className ="form-control" id ="password"/>
		        </div>
					<button type="submit">Log in</button>
		   <div className ="signup">
                    {/* <Link to="/signup">Click here to Sign Up.</Link>  */}
           </div>

		   </form>
		   </div>
      )
   }
}

export default Login;

{/* <form>
                        <div class="email">
                            <input type="email" name="email" placeholder="Email" data-email="" id="email-form">
                            <h2 id="email-error" style="display: none;">Incorrect Email Format</h2>
                            <h2 id="user-error" style="display: none;">User Not Found</h2>
                        </div>
                        <div class="password">
                            <input type="password" placeholder="Password" name="password" data-password="" id="pwd-form">
                            <h2 id="password-error" style="display: none;">Wrong Password</h2>
                        </div>
                        
                                <button type="submit" data-submit="">Log in</button>
    
                        </form></div> */}