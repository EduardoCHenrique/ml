import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Router, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

import Header from './base/Header'
import Home from 'src/views/Home'
import ProductDetail from 'src/views/ProductDetail'


class App extends Component {
  render() {
    return (
      <Router history={createHashHistory()}>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/search"} component={Home}/>
          </Switch>
          <Route path="/item/:id" component={ProductDetail}/>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
