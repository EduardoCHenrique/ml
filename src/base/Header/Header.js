import React from 'react'
import PropTypes from 'prop-types'
import Search from 'src/base/Search'
import logo from 'src/assets/images/logo.png'

import './Header.scss'

const logoHandleClick = (dispatch) => {
  dispatch({  type: 'SEARCH',  search: '' })
}

const Header = (props) => {  
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo" onClick={logoHandleClick.bind(this, props.dispatch)}>
          <img src={logo} className="header__logo__image" />
          Mercado Livre
        </h1>
        <Search />
      </div>
    </header>
  )
}

Header.propTypes = {
  dispatch: PropTypes.func
}

export default Header
