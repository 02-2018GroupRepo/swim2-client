import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      asn: ''
    }
  }

  handleSearch (e) {
    this.setState({ asn: e.target.value })
  }

  handleGoClick () {
    if (!this.props.homepage.isFetchingAsn) {
      this.props.actions.fetchAsn(this.state)
    }
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