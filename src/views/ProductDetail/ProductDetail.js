import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from 'src/base/Button'
import Loader from 'src/base/Loader'

import './ProductDetail.scss'

const ProductContent = ({description, picture, price, sold_quantity, title}) => {

  return (
    <div className="product-detail">
      <div className="product-detail__info">
        <img src={picture} />
        <div className="product-detail__main-info">
          <span className="product-detail__small-info">{sold_quantity} Vendidos</span>
          <h1 className="product-detail__title">{title}</h1>
          <span className="product-detail__price">R$ {price}</span>
          <Button className="product-detail__button">Comprar</Button>
        </div>
      </div>
      <div className="product-detail__description-wrapper">
        <h3 className="product-detail__description-title">Descrição do Produto</h3>
        <p className="product-detail__description"> {description} </p>
      </div>
    </div>
  )
}

const ProductDetail = (props) => {
  return (
    <div className={classNames("product-detail__view", {'product-detail__view--loading': props.loading })}>
      {props.loading ? <Loader /> : <ProductContent {...props} />}
    </div>
  )
}

ProductDetail.propTypes = {
  loading: PropTypes.bool

}

ProductContent.propTypes = {
  description: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
  sold_quantity: PropTypes.number,
  title: PropTypes.string
}

export default ProductDetail