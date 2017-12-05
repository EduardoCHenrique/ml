import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ListItem.scss'

const ListItem = (props) => {
  const { picture, title, price, id } = props

  return (
    <div className="list-item">
      <Link to={`/item/${id}`}>
        <img src={picture} className="list-item__picture" />
      </Link>
      <div className="list-item__info">
        <Link to={`/item/${id}`}>
          <span className="list-item__price">R$ {price}</span>
        </Link>
        <h2 className="list-item__title">{title}</h2>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  picture: PropTypes.string,
  id: PropTypes.string
}

export default ListItem
