import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Icon from 'src/base/Icon'

import "./Search.scss"

class Search extends Component {
  constructor(props) {
    super(props)
  }

  keyPress = (e) => {
    if(e.keyCode == 13){
      this.props.handleSearch()
    }
  }

  render() {
    const { handleChange, search, handleSearch } = this.props
    
    return(
      <div className="search">

        <input 
          type="text"
          className="search__input"
          onChange={handleChange}
          value={search}
          onKeyDown={this.keyPress}/>

        <button className="search__button" onClick={handleSearch}>
          <Icon name="search" className="search__button__icon" />
        </button>
      </div>
    )
  }
}


Search.propTypes = {
  handleSearch: PropTypes.func,
  handleChange: PropTypes.func,
  search: PropTypes.string
  
}

export default Search