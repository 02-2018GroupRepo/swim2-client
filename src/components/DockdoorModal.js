
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';

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
 



  handleFormSubmit = () => {
    if (this.state.dockdoor.includes(this.props.selection)) {
      this.props.props.history.push('/recieveasn');
    } else {
      swal("Error", "Please select a dock door", "error");
    }
  }
  
  moveDropDownMenu = () => {
    const e = document.getElementsByClassName('dropdown-menu')[0];
    e.style.left = "-220px";
    e.style.width = "220px";
  }

  render() {

    //redirect if not logged in
		if (!this.props.isAuth) this.props.props.history.push('/');

  	const doorNumber = this.state.dockdoor.map((aDoor, index)=>{
  		return (
       
                     <MenuItem key={aDoor} eventKey="1" onClick={()=>this.props._dropdownHandler(aDoor)}>{aDoor}</MenuItem>
                   )

  	})

    return (                            
      
             <div className="static-modal">
                 <Modal.Dialog id="modal-dialog-margin">
                   <Modal.Header id="dockdoor-modal-header">
                         <Modal.Title>Dock Door</Modal.Title>
                   </Modal.Header>

                   <Modal.Body>
                     <div className="dockdoor-dropdown">
                     <div className="dockdoor-dropdown-search"><p>{this.props.selection}</p></div>
                     <DropdownButton onClick={() => this.moveDropDownMenu()}>{doorNumber}</DropdownButton>
                       </div>
                   </Modal.Body>

                   <Modal.Footer>
                        <Link to="/homepage"><Button style={{marginRight: "10px"}} className="btn btn-danger">Cancel</Button></Link>
                          {/* <Link to="/recieveasn"><Button className="btn btn-success">Submit</Button></Link> */}
                          <Button className="btn btn-success" onClick={this.handleFormSubmit}>Submit</Button>

                          
                   </Modal.Footer>
                 </Modal.Dialog>
            </div>          
      
      )
    
  }
}

export default DockdoorModal;
