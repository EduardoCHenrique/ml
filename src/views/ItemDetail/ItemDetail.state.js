import React, {Component} from 'react'
import ItemDetail from './ItemDetail'
import queryString from 'query-string'

import ProductRepository from 'src/infra/repositories/ProductRepository'


export default class ItemDetailState extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }  
  }
  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2]

    ProductRepository.getProductDetail(id).then(product => {
      this.setState({ 
        loading: false,
        product
      })
    });
  }

  render() {

    return ( <ItemDetail product={this.state.product} /> )
  }
}