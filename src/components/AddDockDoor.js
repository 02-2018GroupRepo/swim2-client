
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { url } from '../config';

class AddDockDoor extends Component{
constructor(props){
		super(props);
		
	
   }
  formSubmission(){
		     const dockdooradding = document.getElementById("dockdooradding").value
         const addingRequest = axios({

          method: "POST",
          url: `${url}/api/create/dockdoor/${dockdooradding}`,
    });
}


  render() {

    
	

    return (                            
      
             <div className="static-modal">
                 <Modal.Dialog id="modal-dialog-margin">
                   <Modal.Header id="dockdoor-modal-header">
                         <Modal.Title>Please enter a dock door id</Modal.Title>
                   </Modal.Header>

                   <Modal.Body>
                   <div className="dockdooradding">
                      <input type="text" placeholder="Dock Door Id" className ="form-control" id ="dockdooradding" required />
                         </div>
                    
                   </Modal.Body>

                   <Modal.Footer>
                        <Link to="/homepage"><Button style={{marginRight: "10px"}} className="btn btn-danger">Cancel</Button></Link>
                          {/* <Link to="/recieveasn"><Button className="btn btn-success">Submit</Button></Link> */}
                      <Link to ="/homepage"><Button className="btn btn-success" onClick={this.formSubmission} >Submit</Button></Link>
                            
                   </Modal.Footer>
                 </Modal.Dialog>
            </div>          
      
      )
    
  }
}

export default AddDockDoor;
