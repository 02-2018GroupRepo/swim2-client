
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
         console.log(dockdooradding)
        const addingRequest = axios({

          method: "POST",
          url: `${url}/api/create/dockdoor/${dockdooradding}`,
          
    });
}

//   handleFormSubmit = () => {
//     if (this.state.dockdoor.includes(this.props.selection)) {
//       this.props.props.history.push('/recieveasn');
//     } else {
//       swal("Error", "Please select a dock door", "error");
//     }
//   }
  
//   moveDropDownMenu = () => {
//     const e = document.getElementsByClassName('dropdown-menu')[0];
//     e.style.left = "-220px";
//     e.style.width = "220px";
//   }

  render() {

    
	

    return (                            
      
             <div className="static-modal">
                 <Modal.Dialog id="modal-dialog-margin">
                   <Modal.Header id="dockdoor-modal-header">
                         <Modal.Title>Please type how many dock door you want to add?</Modal.Title>
                   </Modal.Header>

                   <Modal.Body>
                   <div className="dockdooradding">
                      <input type="text" placeholder="Number Of Dock Door" className ="form-control" id ="dockdooradding" required />
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
