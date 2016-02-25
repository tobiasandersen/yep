import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'scripts/store/configureStore'
import App from 'components/App'
import DevTools from 'components/DevTools'
import { response } from './scripts/dummyData'

const store = configureStore({ 
  selectedCard: null,
  categories: response.board.rounds[0].categories
})
//const store = configureStore()

document.body.innerHTML += '<div id="root"></div>'
render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
