import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import $ from 'jquery';
import NavigationBar from './NavigationBar';
import { url } from '../config';
class Homepage extends Component{


	constructor(props){
		super(props);
		this.state ={
			asns: []
          
		}
	}

	componentDidMount() {
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

		
		
	

	render() {
		document.querySelector('body').style.backgroundColor = "white";

		console.log(this.state.asns);
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
		                       <li>Serial Number:  {aASN.serials.map((aSerial, index)=>{
		                       	         return(<li>{aSerial.serial}</li>)
		                       })

                                  }
		                         </li>
		                       </ul>
		                    
		               
		            </Panel.Body>
		          </Panel.Collapse>
		          </Panel>)
	      
	     })

          
		    return (
		    	   
                              
		      <div>
                   {asnReturn}
		          
		        </div>)
		        
		        }
}




export default Homepage;

