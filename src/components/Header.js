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

	toggleDropDown = () => {
		try {
			const e = document.querySelector('[data-dropdown]');
			if (e.style.display === "block") {
				e.style.display = "none";
			} else {
				e.style.display = "block";
			}
		} catch (e) {}
	}

	render(){
		const h1Styles = {color: "rgba(77, 80, 85, 0.842)", textAlign: "center", fontFamily: "'Russo One', sans-serif", fontSize: "36px"};
		return(
			<div className="row" id="header">
			<div className="header-div">
			<div className="header-logo">
            <Link to="/homepage"><i className="fas fa-warehouse" style={{display: "block"}}></i></Link>
            <h1 style={h1Styles}>SWIM</h1>
			</div>
			<div className="mobile-nav" onClick={this.toggleDropDown}>
				<i class="fas fa-bars"></i>
			</div>
			<NavigationBar isAuth={this.props.isAuth} _isAuthHandler={this.props._isAuthHandler} />
			</div>
			<div className="mobile-dropdown" data-dropdown>
			<NavigationBar isAuth={this.props.isAuth} _isAuthHandler={this.props._isAuthHandler} />	
			</div>
			
			</div>
			)
	}
}

export default Header;
