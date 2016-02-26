import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'scripts/store/configureStore'
import App from 'components/App'
import DevTools from 'components/DevTools'

// const store = configureStore({ 
//   cards: response.entities.categories,
//   categories: response.entities.categories,
//   categoryList: response.result.categories,
//   users: [],
//   game: {}
// })

const store = configureStore()

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
