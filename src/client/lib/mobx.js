import { computed, Atom, when, extendObservable as extendObservableOriginal, autorun } from 'mobx'
export { Atom, action, when, autorun, autorunAsync, computed, observable, reaction, transaction, asMap } from 'mobx'
import ds from './deepstream.js'
import * as jsonPath from './json-path'

export class RecordAtom {

  _value = {}

  constructor (id) {
    this.id = id
    this._atom = new Atom(id, () => {
      ds.on('connectionStateChanged', this._connectionStateChanged)
      this._init()
    }, () => {
      ds.off('connectionStateChanged', this._connectionStateChanged)
      setTimeout(this._uninit, 2000)
    })
  }

  get isReady () {
    this._atom.reportObserved()
    return this._record && this._record.isReady
  }

  get = (path) => {
    this._atom.reportObserved()
    return jsonPath.get(this._value, path)
  }

  set = (...args) => {
    if (!this._record) {
      this._init()
      setTimeout(this._uninit, 2000)
    }

    this._record.set(...args)
  }

  toJS = () => {
    return this.get()
  }

  _onChange = (value) => {
    this._value = value
    this._atom.reportChanged()
  }

  _onReady = () => {
    this._atom.reportChanged()
  }

  _init = () => {
    this._subscribe()
  }
_uninit = () => {
    if (!this._atom.isBeingTracked) {
      this._unsubscribe()
    }
  }

  _subscribe = () => {
    if (!this._record && typeof this.id === 'string' || this.id.length !== 0) {
      this._record = ds.record.getRecord(this.id)
      this._record.subscribe(this._onChange, true)
      this._record.on('ready', this._onReady)
    }
  }

  _unsubscribe = () => {
    if (this._record) {
      this._record.unsubscribe(this._onChange)
      this._record.off('ready', this._onReady)
      this._record.discard()
      this._record = null
      if (this._atom.isBeingTracked) {
        this._atom.reportChanged()
      }
    }
  }

  _connectionStateChanged = (connectionState) => {
    if (connectionState === 'CLOSED') {
      this._unsubscribe()
    } else if (connectionState === 'OPEN') {
      if (this._atom.isBeingTracked) {
        this._subscribe()
      }
    }
  }

}
