import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Nav from './Nav'

// Pages
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

import styles from './App.scss'

export default class App extends Component {

  static displayName = 'App'
  static propTypes = {
    children: PropTypes.element
  }

  render = () => (
    <BrowserRouter>
      <div>
        <Nav />
        <div className='container' >
          <div className={ styles.content } >
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route component={ NotFound } />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )

}
