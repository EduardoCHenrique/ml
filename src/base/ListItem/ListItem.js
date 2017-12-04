import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Icon from 'src/base/Icon';
import Search from 'src/base/Search';

import logo from 'src/assets/images/logo.png'

import './ListItem.scss';

const ListItem = ({ picture, title, price, id }) => {
  return (
    <div className="list-item">
      <Link to={`/item/${id}`}>
        <img src={picture} className="list-item__picture" />
      </Link>
      <div className="list-item__info">
        <Link to={`/item/${id}`}>
          <span className="list-item__price"> R$ {price}</span>
        </Link>
        <h2 className="list-item__title">{title}</h2>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  picture: PropTypes.string
}

export default ListItem;
