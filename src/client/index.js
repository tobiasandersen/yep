import React from 'react'
import { render } from 'react-dom'
import App from 'components/App'

const store = {}

render(
  <App store={store} />,
  document.getElementById('root')
)
