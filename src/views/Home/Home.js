import React, {Component} from 'react'

import ProductsList from 'src/base/ProductsList';

import './Home.scss'
const Home = (props) => {
  const {products} = props

  return(
    <main className="home">
      <div className="home__content">
        <ProductsList products={products} />
      </div>
    </main>
  )
}
export default Home