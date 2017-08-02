import React, { Component } from 'react'

import styles from './Home.scss'

export default class Home extends Component {

  static displayName = 'Home'

  render = () => (
    <div className={ styles.content } >
      This is the home page of your site. Do with this boilerplate what you please :)
    </div>
  )

}
