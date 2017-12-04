import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ListItem from 'src/base/ListItem'

import './ProductsList.scss';

const renderListItem = (item, index) => <ListItem {...item} key={index} /> 

const ProductsList = (props) =>  {
  const {products} = props
  return (
    <ul className="products-list">
      {products && products.map(renderListItem)}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array
}

export default ProductsList;
