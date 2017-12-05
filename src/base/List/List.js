import React from 'react'
import PropTypes from 'prop-types'

import ListItem from 'src/base/ListItem'

import './List.scss'

const renderListItem = (item, index) => <ListItem {...item} key={index} /> 

const List = (props) =>  {
  const {products} = props
  return (
    <ul className="list">
      {products && products.map(renderListItem)}
    </ul>
  )
}

List.propTypes = {
  products: PropTypes.array
}

export default List
