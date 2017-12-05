import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Loader from 'src/base/Loader'
import EmptyState from 'src/base/EmptyState'
import List from 'src/base/List'

import './Home.scss'

const renderContent = (products, showEmptyState) => {
  return showEmptyState ? <EmptyState /> : <List products={products} />
}

const Home = (props) => {
  const { loading, showEmptyState, products } = props

  return(
    <main className={classNames('home', {'home--loading': loading, 'home--empty': showEmptyState} )}>
      <div className="home__content">
        {loading ? <Loader className="home__loader" /> : renderContent(products, showEmptyState)}
      </div>
    </main>
  )
}

Home.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  showEmptyState: PropTypes.bool
}
export default Home