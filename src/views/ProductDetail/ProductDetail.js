import React, {Component} from 'react'

import './ProductDetail.scss'

export default class ProductDetail extends Component {
  constructor(props) {
    super(props)
     
  }

  render() {
    console.log('props', this.props);
    
    return(
      <div className="product-detail__view">
        <div className="product-detail">
          <div className="product-detail__info">
            <img />
          </div>
          <p className="product-detail__description">
          </p>
        </div>
      </div>
    )
  }
}