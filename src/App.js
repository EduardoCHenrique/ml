import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory';

import queryString from 'query-string'

import Icon from './base/Icon'
import Search from './base/Search'
import Header from './base/Header'
import Home from 'src/views/Home'
import ItemDetail from 'src/views/ItemDetail'


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
            <Route path="/item/:id" component={ItemDetail}/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App;
