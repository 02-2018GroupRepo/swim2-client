import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    const input = event.target.value;
    this.props._searchBarHandler(input);
}

  render () {
    const iconStyle = {fontSize: '1.2rem', color: '#b0adab'};
    return (
      <div className='searchbar-wrapper'>
      <div className="searchbar">
        <input placeholder="Search by Asn number" type="text" onChange={this.searchHandler} />
        </div>
            <div><i className="fas fa-search" style={iconStyle}></i></div>
      </div>
      )
  }
}

export default SearchBar;


