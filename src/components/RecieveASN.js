import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import $ from 'jquery';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { Button } from 'react-bootstrap';
import { url } from '../config';

class RecieveASN extends Component{

	constructor(props){
		super(props);
		this.state ={
			asns: [],
			checked: true
		}
	}

	componentDidMount(){
		axios.get(`${url}/api/asns`)
		.then(res => res.data)
		.then(
			(data) => {  
				this.setState({
					asns: data
				});
			},
			(error) => {
				this.setState({
					asns: []
				})
			}
			)
	}

	onChange(check) {
		this.setState({checked: check.target.checked});
	}


	render() {
		document.querySelector('body').style.backgroundColor = "white";
		
		

		console.log(this.props.dockdoor);
		const asnReturn = this.state.asns.map((aASN,index)=>{
			return( <Panel id="collapsible-panel-example-3">
				<Panel.Heading>
				<Panel.Title>ASN Number</Panel.Title>
				<Panel.Toggle componentClass="a">{aASN.asn}</Panel.Toggle>
				</Panel.Heading>

				<Panel.Collapse>
				<Panel.Body>                  
				<ul>                
				<li>Expected Arrival Date:{aASN.expectedArrivalDate} </li>
				<li>Expect Arriaval Time: {aASN.expectedArrivalTime}</li>
				<li>Serial Number: {aASN.serials.map((aSerial, index)=>{
					return(
						<li>
						<CheckboxGroup>
						<Checkbox
						label="Click me"
						checked={this.state.checked}
						onChange={this.onChange.bind(this)}
						/>  {aSerial.serial}
						</CheckboxGroup>
						</li>
						)
				})
			}
			</li>
			</ul>
			</Panel.Body>
			</Panel.Collapse>
			</Panel>
			)
		})            
		return (                            
			<div>
			{asnReturn}                  
			</div>
			)
	}
}

export default RecieveASN;