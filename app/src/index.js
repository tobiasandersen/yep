import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'scripts/store/configureStore'
import App from 'components/App'
import GameSetup from 'components/GameSetup'
import Board from 'components/Board'
import DevTools from 'components/DevTools'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

document.body.innerHTML += '<div id="root"></div>'

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={GameSetup} />
          <Route path="board" component={Board} />
          <Route path="*" component={GameSetup} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
