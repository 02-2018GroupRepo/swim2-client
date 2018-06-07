import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import {Link} from 'react-router-dom';
import './header.css';


class Header extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div className="row">
			<div className="row title123">
			<div className="col-md-6 hdlogo123">
			
			<p className="textStyle">Integrated Warehouse Management System</p>

			</div>
			<div className="col-md-offset-1 col-md-5 navAndSearch123">
			<NavigationBar isAuth={this.props.isAuth} _isAuthHandler={this.props._isAuthHandler} />
			</div>
			</div>
			
			</div>
			)
	}
}

export default Header;
