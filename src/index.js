import React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import App from './layouts/App'

const renderer = (Component) => {
  render(
    <AppContainer >
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderer(App)
if (module.hot)
  module.hot.accept('./layouts/App', () => {
    console.log('HOT RELOADING VIEW')
    renderer(require('./layouts/App').default)
  })
