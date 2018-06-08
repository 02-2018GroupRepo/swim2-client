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
		const h1Styles = {color: "rgba(77, 80, 85, 0.842)", textAlign: "center", fontFamily: "'Russo One', sans-serif", fontSize: "36px"};
		return(
			<div className="row" id="header">
			<div className="header-div">
			<div className="header-logo">
            <i className="fas fa-warehouse" style={{display: "block"}}></i>
            <h1 style={h1Styles}>SWIM</h1>
			</div>
			<NavigationBar isAuth={this.props.isAuth} _isAuthHandler={this.props._isAuthHandler} />
			</div>
			
			</div>
			)
	}
}

export default Header;
