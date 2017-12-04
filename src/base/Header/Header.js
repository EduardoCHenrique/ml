import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Icon from 'src/base/Icon';
import Search from 'src/base/Search';
import logo from 'src/assets/images/logo.png'

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props)
  }
    
  render() {
    return (
      <header className="header">
        <div className="header__content">
          <Link to="/">
            <h1 className="header__logo">
            <img src={logo} className="header__logo__image" />
            Mercado Livre
            </h1>
          </Link>
          <Search />
        </div>
      </header>
    );
  }
}

export default Header;