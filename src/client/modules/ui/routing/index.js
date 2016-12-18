import { action, extendObservable } from 'mobx'

export class RoutingStore {

  constructor (store, initialState = {}, history) {
    this.store = store
    this.history = history

    extendObservable(this, {
      locationBeforeTransitions: null,
      ...initialState
    })
  }

  dehydrate = () => {
  }

  @action changeLocation (location) {
    this.locationBeforeTransitions = location
  }

  @action push (...args) {
    this.history.push(...args)
  }

  @action replace (...args) {
    this.history.replace(...args)
  }

  @action go (...args) {
    this.history.go(...args)
  }

  @action goBack (...args) {
    this.history.goBack(...args)
  }

  @action goForward (...args) {
    this.history.goForward(...args)
  }

  _handleAction = ({ method, args }) => {
    this.history[method](...args)
  }
}

export default function setup (store, history) {
  store.register('routing', RoutingStore, history)
}
