import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ProductDetail from './ProductDetail'
import { connect } from 'react-redux'

import ProductRepository from 'src/infra/repositories/ProductRepository'

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

class ProductDetailState extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }  
  }

  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2]

    ProductRepository.getProductDetail(id).then(product => {
      this.setState({ loading: false, product })
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.search !== nextProps.search) {
      nextProps.history.push({ pathname: '/', search: `?search=${nextProps.search}`}) 
    }
  }

  render() {
    return ( <ProductDetail loading={this.state.loading} {...this.state.product} /> )
  }
}

ProductDetailState.propTypes = {
  location: PropTypes.object,
  search: PropTypes.string,
  history: PropTypes.object
}

export default connect(mapStateToProps)(ProductDetailState)