import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import $ from 'jquery';
import NavigationBar from './NavigationBar';
import { url } from '../config';
import Searchbar from './Searchbar';
class Homepage extends Component{


	constructor(props){
		super(props);
		this.state ={
			asns: [],
			filteredAsns: [],
			

		}
	}


	componentDidMount() {
    axios.get(`${url}/api/asns`)
         .then(res => res.data)
         .then(
           (data) => {  
             this.setState({
								 asns: data,
								 filteredAsns: data
              });
            },
            (error) => {
              this.setState({
                asns: []
              })
            }
          ) 
}

_searchBarHandler = (searchTerm) => {
	const re = new RegExp(searchTerm.toString() + '.*', 'gi');
				let filteredAsns = this.state.asns.filter(record => {
					let asnId = Number(record.asn).toString();
					return asnId.match(re);
				});
				this.setState({
					filteredAsns
        });
}


	render() {
		document.querySelector('body').style.backgroundColor = "white";

		
	   const asnReturn = this.state.filteredAsns.map((aASN,index)=>{
		          return( <Panel id="collapsible-panel-example-3">
		          <Panel.Heading>
		            <Panel.Title>ASN Number</Panel.Title>
		            <Panel.Toggle componentClass="a">{aASN.asn}</Panel.Toggle>
		          </Panel.Heading>

		          <Panel.Collapse>
		            <Panel.Body>
		                   
                               <ul> 
		                     
		                      
		                       <li>Expected Arrival Date:{aASN.expectedArrivalDate} </li>
		                       <li>Expected Arrival Time: {aASN.expectedArrivalTime}</li>
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
		    	   
                              
		      <div className="container-home">
						<Searchbar _searchBarHandler={this._searchBarHandler} />
                   {asnReturn}
		          
		        </div>)
		        
		        }
}




export default Homepage;

