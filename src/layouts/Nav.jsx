import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import pkg from '../../package.json'

export default class Nav extends Component {

  static displayName = 'Nav'

  getLinks = () => [
    { name: 'About', href: '/about' }
  ]

  renderLinks = () =>
    this.getLinks().map((link, index) => (
      <li key={ index } className='nav-item'>
        <NavLink
          className='nav-link' to={ link.href }
          data-toggle='collapse' data-target='.navbar-collapse.in' >
          { link.name }
        </NavLink>
      </li>
    ))

  render = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false" >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <NavLink className="navbar-brand" to='/' >{ pkg.title }</NavLink>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            { this.renderLinks() }
          </ul>
        </div>
      </div>
    </nav>
  )

}
