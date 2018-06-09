import React, {Component} from 'react';
import axios from 'axios';
import { Panel, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import { url } from '../config';
import Searchbar from './Searchbar';

class RecieveASN extends Component{

	constructor(props){
		super(props);
		this.state ={
			asns: [],
			dockdoor: undefined,
			filteredAsns: []
		}
	}


	componentDidMount(){
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

	onChange=(id)=> {
		const e = document.getElementById(id);
		const labelElement = document.querySelector(`[data-checkbox="${id}"`)
		if(e.getAttribute("checked")==="true") {
			e.setAttribute("checked", "false");
			labelElement.classList.replace("fa-check-square", "fa-square");
		} else {
			e.setAttribute("checked", "true");
			labelElement.classList.replace("fa-square", "fa-check-square");
		}	
			
	}
	
	formSubmit=(event)=>{
		event.preventDefault();
		let submitBox = [];
		let asnId = event.target.getAttribute("asn");
		for(let i=0; i<event.target.length; i++){
			if(event.target[i].getAttribute('checked')){
				submitBox.push(event.target[i].value);
			}
		}

		if (submitBox.length === 0) {
			swal("Error", "Please select a dock door", "error");
		} else if (!this.props.dockdoor) {
			swal("Error", "Please select a serial number", "error");
		} else {
			axios({
				method: "POST",
				url: `${url}/api/submit/received/${asnId}/${this.props.dockdoor}`,
				data: 
					submitBox
				
			  }).then(response=>{
				  swal("Success", "Form Submitted!", "success");
			  })
		}
	}


	render() {
		document.querySelector('body').style.backgroundColor = "white";
		const panelTitleStyles = {color: "rgba(77, 80, 85, 0.843)", display: "flex", justifyContent: "space-between", alignItems:"center"};
		const asnReturn = this.state.filteredAsns.map((aASN,index)=>{
			return( <Panel id="collapsible-panel-example-3" key={aASN.asn}>
				<Panel.Heading style={{fontFamily: '"Russo One", sans-serif', color:"rgba(77, 80, 85, 0.843)"}}>
		            <Panel.Title style={panelTitleStyles}>
									<h4 style={{color: "#01a2ff"}}>#{aASN.asn}</h4>
									<div>
									<Panel.Toggle style={{cursor: "pointer"}}	componentClass="a">Serial Numbers</Panel.Toggle>
									</div>
								</Panel.Title>
				</Panel.Heading>
				<Panel.Collapse>
				<Panel.Body>                  
				<form onSubmit={this.formSubmit} asn={aASN.asn}>
				<Table striped bordered condensed hover>
									<thead>
										<tr>
											<th style={{width: "6%"}}>Received</th>
											<th>Serial #</th>
										</tr>	
										</thead>
										<tbody>
				{aASN.serials.map((aSerial, index)=>{
		
					return(
						<tr key={aASN.asn + aSerial.serial}> 
							<td style={{textAlign: "center"}}>
							<label htmlFor={aASN.asn + aSerial.serial}>
							<i className="far fa-square" data-checkbox={aASN.asn + aSerial.serial} onClick={()=>this.onChange(aASN.asn + aSerial.serial)}></i></label>

						<input id={aASN.asn + aSerial.serial}
						style={{display: "none"}}
						type="checkbox"
						value={aSerial.serial}
						/>  
						</td>
						<td>{aSerial.serial}</td>
						</tr>
						)
				})
			}
			</tbody>
			</Table>
			<button className='btn-primary' type="submit">Submit</button>
			</form>

			</Panel.Body>
			</Panel.Collapse>
			</Panel>
			)
		})            
		return (                            
			<div className="container-home">
			<Searchbar _searchBarHandler={this._searchBarHandler} />
			{asnReturn}                  
			</div>
			)
	}
}

export default RecieveASN;