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
			dockdoor: undefined
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

	onChange=(id)=> {
		if(document.getElementById(id).getAttribute("checked")==="true"){
		document.getElementById(id).setAttribute("checked", "false")

		}else{
			document.getElementById(id).setAttribute("checked", "true")

		}	
			
	}
	
	formSubmit=(event)=>{
		event.preventDefault();
		let submitBox = [];
		let asnId = event.target.getAttribute("asn");
		for(let i=0; i<event.target.length; i++){
			if(event.target[i].checked){
				submitBox.push(event.target[i].value);
			}
		}
		axios({
          method: "POST",
          url: `${url}/api/submit/received/${asnId}/${this.props.dockdoor}`,
          data: 
          	submitBox
          
    	}).then(response=>{
    		console.log(response)
    	})
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
				<form onSubmit={this.formSubmit} asn={aASN.asn}>
				<li>Serial Number: {aASN.serials.map((aSerial, index)=>{

					return(
						<li>
						<input id={aASN.asn + aSerial.serial}
						label="Click me"
						type="checkbox"
						value={aSerial.serial}
						onChange={()=>this.onChange(aASN.asn + aSerial.serial)}
						/>  {aSerial.serial}
						</li>
						)
				})
			}
			</li>
			<button className='btn-primary' type="submit">Submit</button>
			</form>

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