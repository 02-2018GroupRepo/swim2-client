import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import $ from 'jquery';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { Button } from 'react-bootstrap';

class RecieveASN extends Component{
	

state = {
    checked: true,
   
  };

  onChange(check) {
    this.setState({checked: check.target.checked});
  }

    // const recievingRequest = axios({
    //   method: "POST",
    //   url: `${url}/login`,
    //   data: {
        
    //   }
    // });

		
	

	render() {

      
          
		    return (
		      <div>
		       
		         <Panel id="collapsible-panel-example-3" >
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
		                        <li> Serial Number :
		                         <CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456781

									</CheckboxGroup> 
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456782
									      
									</CheckboxGroup> 
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456783
									      
									</CheckboxGroup>  
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456784
									      
									</CheckboxGroup> 
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456785
									      
									</CheckboxGroup>  
     		    
								</li>
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
		                        <li> Serial Number :
		                          <CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456781

									</CheckboxGroup> 
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456782
									      
									</CheckboxGroup> 
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456783
									      
									</CheckboxGroup>  
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456784
									      
									</CheckboxGroup> 
									<CheckboxGroup>
								     <Checkbox
									        label="Click me"
									        checked={this.state.checked}
									        onChange={this.onChange.bind(this)}
									      />  123456785
									      
									</CheckboxGroup>  
 


		                         </li>
		                       </ul>

		            </Panel.Body>
		          </Panel.Collapse>
		        </Panel>
		        </div>
		        )
}


}

export default RecieveASN;

