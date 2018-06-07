import React, { Component } from 'react';
import { url } from '../config';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      asns: []
    }
       this.handleSearch = this.handleSearch.bind(this);
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

 
  handleSearch (e) {
    this.setState({ asns: e.target.value })
  }
  

  handleGoClick () {
  
      this.props.searchUpdate(this.state.asns)
    
  }

  render () {
    return (
      <div className='searchbar-container'>
      <form onSubmit={e => e.preventDefault()}>
      <input
      type='text'
      size='45'
      placeholder='Enter ASN Number'
      onChange={this.handleSearch.bind(this)}
      value={this.state.asn} />
      <button
      type='submit'
      onClick={this.handleGoClick.bind(this)}>
      Search
      </button>
      </form>
      </div>
      )
  }
}

export default SearchBar;