import React from 'react'
import { render } from 'react-dom'
import App from 'components/App'

document.body.innerHTML += '<div id="root"></div>'
render(<App />, document.getElementById('root'))
