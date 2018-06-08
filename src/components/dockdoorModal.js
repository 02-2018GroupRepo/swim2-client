
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FormGroup, Col, Panel, Radio, Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import $ from 'jquery';

import { url } from '../config';

class dockdoorModal extends Component{
constructor(props){
		super(props);
		this.state ={
			dockdoor: []
			
		}
	
  }
  componentDidMount(){
		axios.get(`${url}/dockdoor/get`)
		.then(res => res.data)
		.then(
			(data) => {  
				this.setState({
					dockdoor: data
				});
			},
			(error) => {
				this.setState({
					dockdoor: []
				})
			}
			)
	}

  render() {
  	const doorNumber =this.state.dockdoor.map((aDoor, index)=>{
  		return (
       
                     <MenuItem eventKey="1" onClick={()=>this.props._dropdownHandler(aDoor)}>{aDoor}</MenuItem>
                   )

  	})

    return (                            
      
             <div className="static-modal">
                 <Modal.Dialog>
                   <Modal.Header>
                         <Modal.Title>Select a dock door</Modal.Title>
                   </Modal.Header>

                   <Modal.Body>

                    <DropdownButton>{doorNumber}</DropdownButton>
                   </Modal.Body>

                   <Modal.Footer>
                        <Link to="/homepage" ><Button>Close</Button></Link>
                          <Link to="/recieveasn" ><Button>Submit</Button></Link>
                        
                   </Modal.Footer>
                 </Modal.Dialog>
            </div>          
      
      )
    
  }
}

export default dockdoorModal;