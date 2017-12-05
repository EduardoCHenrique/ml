import React, {Component} from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { connect } from 'react-redux'

import ProductRepository from 'src/infra/repositories/ProductRepository'
import Home from './Home'

import './Home.scss'

function mapStateToProps(state) {
  return { search: state.search }
}

class HomeState extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasPreviousSearch: false,
      products: [],
      showEmptyState: false
    }
  }

  componentDidMount() {
    const { search = '' } = queryString.parse(this.props.location.search)

    if (search) {
      this.getProducts(search)
      this.props.dispatch({ type: 'SEARCH',  search: search })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { search = '' } = queryString.parse(nextProps.location.search)
    const isNotTheSameSearch = search.toLowerCase() !== nextProps.search.toLowerCase()
    
    if (isNotTheSameSearch) {
      nextProps.history.push({ pathname: '/', search: `?search=${nextProps.search}`})
      this.getProducts(nextProps.search)
    }
  }

  getProducts(search) {
    this.setState({ loading: true })
    ProductRepository.getProductsBySearch(search).then(products => {
      this.setState({ 
        products: products, 
        loading: false,
        showEmptyState: !products.length
      })
    })
  }

  render() {
    return ( <Home {...this.state} /> )
  }
}

HomeState.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  search: PropTypes.string
}

export default connect(mapStateToProps)(HomeState)