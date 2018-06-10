import React, {Component} from 'react';
import axios from 'axios';
import { Panel, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import { url } from '../config';
import Searchbar from './Searchbar';

class Outbound extends Component{

	constructor(props){
		super(props);
		this.state ={
			asns: [],
			dockdoor: undefined,
			filteredAsns: [],
			firstLoad: true
		}
	}


	componentDidMount(){
		axios.get(`${url}/api/asns`)
		.then(res => res.data)
		.then(
			(data) => {  
				this.setState({
					asns: data,
					filteredAsns: data,
					firstLoad: false
				});
			},
			(error) => {
				this.setState({
					asns: [],
					firstLoad: false
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
			labelElement.style.color = "rgb(77, 80, 85)";
		} else {
			e.setAttribute("checked", "true");
			labelElement.style.color = "rgb(11,170,107)";
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
			swal("Error", "Please select a serial number", "error");
		} else {
			axios({
				method: "POST",
				url: `${url}/api/submit/delivered/${asnId}/1`,
				data: 
					submitBox
				
			  }).then(response=>{
				  swal("Success", "Form Submitted!", "success");
			  })
		}
	}

	selectAll = (event, idArray) => {
		event.preventDefault();
		idArray.forEach(id => {
			let e = document.getElementById(id);
			let labelElement = document.querySelector(`[data-checkbox="${id}"`);
			e.setAttribute("checked", "true");
			labelElement.style.color = "rgb(11,170,107)";
			labelElement.classList.replace("fa-square", "fa-check-square");
		});
	}


	render() {
		//redirect if not logged in
		if (!this.props.isAuth) this.props.props.history.push('/');

		//element styles
		const panelTitleStyles = {color: "rgba(77, 80, 85, 0.843)", display: "flex", justifyContent: "space-between", alignItems:"center"};
		const tableDataStyle = {fontFamily:'"Russo One", sans-serif', fontSize: "18px", color: "rgba(77, 80, 85, 0.843)"};
		const tableHeaderCheckBoxStyle = {fontFamily:'"Russo One", sans-serif', fontSize: "18px", width: "6%", color: "rgba(77, 80, 85, 0.843)"};
		const tableHeaderStyle = {fontFamily:'"Russo One", sans-serif', fontSize: "18px", color: "rgba(77, 80, 85, 0.843)"};
		const noResultsStyle = {fontFamily:'"Russo One", sans-serif', fontSize: "30px", color: "rgba(77, 80, 85, 0.843)", textAlign: "center", marginTop: "75px"};

		let filteredAsnsByStatus = this.state.filteredAsns.filter(asn => asn.status === 'received');
		let asnReturn = filteredAsnsByStatus.map((aASN,index)=>{
			let serialAsnIdArr = [];
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
											<th style={tableHeaderCheckBoxStyle}>Loaded</th>
											<th style={tableHeaderStyle}>Serial #</th>
										</tr>	
										</thead>
										<tbody>
				{aASN.serials.map((aSerial, index)=>{
					serialAsnIdArr.push(aASN.asn + aSerial.serial);
					return(
						<tr key={aASN.asn + aSerial.serial}> 
							<td style={{textAlign: "center"}}>
							<label style={{margin: "0px"}} htmlFor={aASN.asn + aSerial.serial}>
							<i className="far fa-square" style={{color:"rgb(108, 110, 114)", fontSize: "24px"}} data-checkbox={aASN.asn + aSerial.serial} onClick={()=>this.onChange(aASN.asn + aSerial.serial)}></i></label>

						<input id={aASN.asn + aSerial.serial}
						style={{display: "none"}}
						type="checkbox"
						value={aSerial.serial}
						/>  
						</td>
						<td style={tableDataStyle}>{aSerial.serial}</td>
						</tr>
						)
				})
			}
			</tbody>
			</Table>
			<div className="product-form-btn-container">
			<button className='btn btn-primary' style={{marginRight: "12px"}} onClick={(event) => this.selectAll(event, serialAsnIdArr)}>Select All</button>
			<button className='btn btn-success' type="submit">Submit</button>
			</div>
			</form>

			</Panel.Body>
			</Panel.Collapse>
			</Panel>
			)
		})
		
		if (this.state.firstLoad) asnReturn = (<h1 style={noResultsStyle}>Loading...</h1>)
		else if (filteredAsnsByStatus.length === 0) asnReturn = (<h1 style={noResultsStyle}>No Results</h1>)
		
		return (                            
			<div className="container-home">
			<Searchbar _searchBarHandler={this._searchBarHandler} />
			{asnReturn}                  
			</div>
			)
	}
}

export default Outbound;