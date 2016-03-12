require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'scripts/store/configureStore'
import App from 'components/App'
import GameSetupContainer from 'containers/GameSetupContainer'
import JoinContainer from 'containers/JoinContainer'
import Welcome from 'components/Welcome'
import Board from 'components/Board'
import DevTools from 'components/DevTools'
import WSInstance from 'scripts/utils/PlayerWebsocket'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { resizeScreen } from 'actions/screen'
import { receiveEvent } from 'actions/events'
import { CREATE_NEW_GAME, ADD_INTERACTIVE_PLAYER } from 'constants/ActionTypes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

window.addEventListener('resize', () => {
  store.dispatch(resizeScreen())
})

function checkPath(nextState, replace) {
  const pathFromServer = document.getElementById('path').value
  const currentPath = window.location.pathname

  if (pathFromServer !== currentPath) {
    replace({
      pathname: pathFromServer
    })
  }
}

const socket = new WSInstance('localhost:8080/events', wsDispatcher)

function wsDispatcher(event) {
  console.log('wsDispatcher', event)
  return store.dispatch(receiveEvent(event))
}

function wsListener() {
  const { lastAction } = store.getState()

  switch (lastAction.type) {

    case CREATE_NEW_GAME:
      return socket.createNewGame()

    case ADD_INTERACTIVE_PLAYER:
      console.log('wsListener', lastAction)
      return socket.addPlayer(lastAction.payload)

    default:
      return
  }
}

store.subscribe(() => wsListener())

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App} onEnter={checkPath}>
          <IndexRoute component={Welcome} />
          <Route path="new" component={GameSetupContainer} />
          <Route path="board" component={Board} />
          <Route path="join" component={JoinContainer} />
          <Route path="*" component={GameSetupContainer} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
