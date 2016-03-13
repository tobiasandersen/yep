require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'scripts/store/configureStore'
import App from 'components/App'
import GameSetupContainer from 'containers/GameSetupContainer'
import JoinContainer from 'containers/JoinContainer'
import PlayContainer from 'containers/PlayContainer'
import Welcome from 'components/Welcome'
import Board from 'components/Board'
import DevTools from 'components/DevTools'
import WebSocketActionMapper from 'scripts/utils/WebSocketActionMapper'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { checkPath } from 'scripts/utils/PathMapper'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

WebSocketActionMapper(store)

render(
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router history={history}>
        <Route path="/" component={App} onEnter={checkPath}>
          <IndexRoute component={Welcome} />
          <Route path="new" component={GameSetupContainer} />
          <Route path="board" component={Board} />
          <Route path="join" component={JoinContainer} />
          <Route path="play" component={PlayContainer} />
          <Route path="*" component={GameSetupContainer} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)

