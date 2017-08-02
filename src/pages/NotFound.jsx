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
        <h1 className={ styles.notFound404 }>
          <p className={ styles.notFound404Number }>
            404
          </p> '{ window.location.pathname }'
        </h1>
        <h2 className={ styles.notFoundText } >
          Unfortunately, the page was not found.
        </h2>
        <br />
        <h3 className={ styles.notFoundText } >
          Automatic redirect in { this.state.timeLeft } seconds
        </h3>
      </div>
    </div>
  )

}
