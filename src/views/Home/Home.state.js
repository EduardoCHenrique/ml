import React, {Component} from 'react'
import axios from 'axios';
import queryString from 'query-string'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import ProductsList from 'src/base/ProductsList';
import ProductRepository from 'src/infra/repositories/ProductRepository'
import Home from './Home'
import './Home.scss'


function mapStateToProps(state) {
  return {
    search: state.search
  };
}

class HomeState extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasPreviousSearch: false,
      products: [] 
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const { search = '' } = queryString.parse(nextProps.location.search);
    const isNotTheSameSearch = search.toLowerCase() !== nextProps.search.toLowerCase();

    if (isNotTheSameSearch) {
      nextProps.history.push({ pathname: '/', search: `?search=${nextProps.search}`})
      this.getProducts(nextProps.search);
    }
  }

  componentDidMount() {
    const { search = '' } = queryString.parse(this.props.location.search);

    if (search) {
      this.getProducts(search)
      this.props.dispatch({ type: 'SEARCH',  search: search });
   }
  }

  getProducts(search) {
    ProductRepository.getProductsBySearch(search).then(products => {
      this.setState({ products })
    })
  }

  render() {
    return(
      <Home products={this.state.products} />
    )
  }
}

export default connect(mapStateToProps)(HomeState);