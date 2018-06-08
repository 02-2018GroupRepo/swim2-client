
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FormGroup, Col, Panel, Radio, Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { url } from '../config';

class DockdoorModal extends Component{
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
                 <Modal.Dialog id="modal-dialog-margin">
                   <Modal.Header id="dockdoor-modal-header">
                         <Modal.Title>Receiving</Modal.Title>
                   </Modal.Header>

                   <Modal.Body>
                     <div className="dockdoor-dropdown" id="dockdoor-modal-dropdown">
                     <div className="dockdoor-dropdown-search">test</div>
                     <DropdownButton>{doorNumber}</DropdownButton>
                       </div>
                   </Modal.Body>

                   <Modal.Footer>
                        <Link to="/homepage"><Button style={{marginRight: "10px"}} className="btn btn-danger">Cancel</Button></Link>
                          <Link to="/recieveasn" ><Button className="btn btn-success">Submit</Button></Link>
                        
                   </Modal.Footer>
                 </Modal.Dialog>
            </div>          
      
      )
    
  }
}

export default DockdoorModal;
