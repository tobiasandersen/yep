import { applyMiddleware, compose, createStore } from 'redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import DevTools from '../components/DevTools'

function withDevTools(middleware) {
  const devTools = window.devToolsExtension
    ? window.devToolsExtension()
    : DevTools.instrument()
  return compose(middleware, devTools)
}

export default function configureStore(initialState) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, multi)
  middleware = withDevTools(middleware)

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
