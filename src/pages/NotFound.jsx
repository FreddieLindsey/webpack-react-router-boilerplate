import React, { Component } from 'react'

import styles from './NotFound.scss'

export default class NotFound extends Component {

  static displayName = 'Not Found'

  constructor (props) {
    super(props)
    this.state = {
      timeLeft: 5
    }
  }

  componentDidMount = () => {
    this.handleAutoRedirect()
  }

  handleAutoRedirect = () => {
    const { timeLeft } = this.state

    if (timeLeft <= 0) window.location = '/'
    setTimeout(() => {
      this.setState({
        timeLeft: timeLeft - 1
      })
      this.handleAutoRedirect()
    }, 1000)
  }

  render = () => (
    <div className={ styles.notFoundContainer } >
      <div className={ styles.notFoundCell} >
        <h2 className={ styles.notFoundText } >
          Unfortunately, the page '{ window.location.pathname }' was not found.
        </h2>
        <hr />
        <h4 className={ styles.notFoundText } >
          You will be automatically redirected in { this.state.timeLeft } seconds
        </h4>
      </div>
    </div>
  )

}
