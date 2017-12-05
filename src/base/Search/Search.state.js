import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

class SearchState extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      search: props.search
    }
  }
  
  componentWillReceiveProps({search}) {
    this.setState({search})
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSearch = () => {
    this.props.dispatch({  type: 'SEARCH',  search: this.state.search })
  }

  clearAndCloseSearch = () => {
    this.setState({ search: '', hasSearch: false })
  }

  render() {
    const {className} = this.props

    return(
      <Search
        className={className}
        handleSearch={this.handleSearch.bind(this)}
        handleChange={this.handleChange}
        {...this.state}
      />
    )
  }
}

SearchState.propTypes = {
  search: PropTypes.string,
  className: PropTypes.string,
  dispatch: PropTypes.func
}


export default connect(mapStateToProps)(SearchState)