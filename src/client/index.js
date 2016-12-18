import React from 'react'
import { render } from 'react-dom'
import Routes from './modules/routes'
import { observable, asMap } from 'mobx'

class Store {

  @observable _stores = asMap({})

  get = name => {
    return this._stores.get(name)
  }

  register = (name, Store, ...args) => {
    const prev = this._stores.get(name)
    const initialState = prev && prev.dehydrate && prev.dehydrate() || undefined
    const next = new Store(this, initialState, ...args)
    this._stores.set(name, next)
  }

  unregister = (name) => {
    this._stores.delete(name)
  }

}

function createStore () {
  const store = new Store()

  // create stores and enable hot-reloading
  const context = require.context('./modules', true, /^\.\/(auth|asset|render|(model|schema)\/[^\/]+|ui\/[^\/]+\/index|routes\/dashboard\/index)\.js$/)
  const modules = context.keys()
    .reduce((acc, path) => Object.assign(acc, {[path]: context(path)}), {})
  Object.values(modules).forEach(module => module.default(store))
  module.hot && module.hot.accept(context.id, () => {
    const newContext = require.context('./modules', true, /^\.\/(auth|asset|render|(model|schema)\/[^\/]+|ui\/[^\/]+\/index|routes\/dashboard\/index)\.js$/)
    newContext.keys()
      .map(path => [path, newContext(path)])
      .filter(([path, newModule]) => modules[path] !== newModule)
      .forEach(([path, newModule]) => {
        modules[path] = newModule
        newModule.default(store)
      })
  })

  return store
}

const store = createStore()

render(
  <Routes store={store} />,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./modules/routes', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRoutes = require('./modules/routes').default
    render(
      <NextRoutes store={store} />,
      document.getElementById('root')
    )
  })
}
