import React, {Component} from 'react'
import ProductDetail from './ProductDetail'
import queryString from 'query-string'
import { connect } from 'react-redux';


import ProductRepository from 'src/infra/repositories/ProductRepository'


function mapStateToProps(state) {
  return {
    search: state.search
  };
}
class ProductDetailState extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }  
  }

  componentDidMount() {
    console.log('ComponentDidMount::::', this.props);
    
    const id = this.props.location.pathname.split("/")[2]

    ProductRepository.getProductDetail(id).then(product => {
      this.setState({ 
        loading: false,
        product
      })
    });
  }

  componentWillReceiveProps(nextProps, currentProps) {
    if (this.props.search !== nextProps.search) {
      nextProps.history.push({ pathname: '/', search: `?search=${nextProps.search}`}) 
    }
  }

  render() {

    return ( <ProductDetail product={this.state.product} /> )
  }
}

export default connect(mapStateToProps)(ProductDetailState)