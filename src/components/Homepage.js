import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import $ from 'jquery';
import NavigationBar from './NavigationBar';

class Homepage extends Component{


	constructor(props){
		super(props);
		this.state ={
          
		}
	}
		
	

	render() {
		document.querySelector('body').style.backgroundColor = "white";
          
		    return (

		      <div>
		        

		         <Panel id="collapsible-panel-example-3">
		          <Panel.Heading>
		            <Panel.Title>ASN Number</Panel.Title>
		            <Panel.Toggle componentClass="a">ASN</Panel.Toggle>
		          </Panel.Heading>
		          <Panel.Collapse>
		            <Panel.Body>
		                  <ul> 
		                       <li>Asn Id: </li>
		                       <li>Vendor id: </li>
		                       <li>Expected Arrival Date: </li>
		                        <li> Expect Arriaval Time: </li>
		                        <li> Serial Number : [] </li>
		                       </ul>

		            </Panel.Body>
		          </Panel.Collapse>
		          </Panel>
		           <Panel id="collapsible-panel-example-3">
		           <Panel.Heading>
		            <Panel.Title>ASN Number</Panel.Title>
		            <Panel.Toggle componentClass="a">ASN</Panel.Toggle>
		          </Panel.Heading>
		          <Panel.Collapse>
		            <Panel.Body>
		                  <ul> 
		                       <li>Asn Id: </li>
		                       <li>Vendor id: </li>
		                       <li>Expected Arrival Date: </li>
		                        <li> Expect Arriaval Time: </li>
		                        <li> Serial Number : [] </li>
		                       </ul>

		            </Panel.Body>
		          </Panel.Collapse>
		        </Panel>
		        </div>
		        )
}


}

export default Homepage;

