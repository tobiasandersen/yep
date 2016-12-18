import { RecordAtom, computed, when, action } from 'lib/mobx'
import invariant from 'invariant'

export class ListStore {

  _records = new Map()

  constructor (store, initialState = {}) {
    this.store = store
  }

  dehydrate = () => {

  }

  get = (id, path) => {
    id = `${id}:${path}`

    let rec = this._records.get(id)
    if (!rec) {
      rec = new ListRecord(this, id)
      this._records.set(id, rec)
    }
    return rec
  }
}

class ListRecord {

  id: string
  items: ?Array

  constructor (store, id) {
    this.store = store
    this.id = id
    this._record = new RecordAtom(id)
  }

  toJS = () => {
    return this.items || []
  }

  @computed get isReady () {
    return this._record.isReady
  }

  @computed get items () {
    return this.isReady ? this._record.get('value') || [] : undefined
  }

  get = (index) => {
    return this.items && this.items[index] || undefined
  }

  forEach = (...args) => this.items.forEach(...args)

  @action init = (items) => {
    invariant(Array.isArray(items), 'ListRecord::init expected array')
    this._record.set('value', items)
    return this
  }

  @action set = (items) => {
    invariant(Array.isArray(items), 'ListRecord::init expected array')
    this._record.set('value', items)
  }

  @action insert = (index, id) => {
    if (typeof id !== 'string') {
      throw new Error('invalid argument id')
    }

    when(() => this.isReady, () => {
      const items = this.items.filter(id2 => id2 !== id)
      items.splice(index, 0, id)
      this._record.set('value', items)
    })
  }

  @action remove = (id) => {
    if (typeof id !== 'string') {
      throw new Error('invalid argument id')
    }

    when(() => this.isReady, () => {
      const items = this.items.filter((id2) => id2 !== id)
      this._record.set('value', items)
    })
  }

  @action move = (from, to) => {
    if (!(Number.isInteger(from) && from >= 0)) {
      throw new Error('invalid argument from')
    } else if (!(Number.isInteger(to) && to >= 0)) {
      throw new Error('invalid argument to')
    }

    when(() => this.isReady, () => {
      const items = [...this.items]

      if (from > items.length) {
        throw new Error('invalid argument from')
      } else if (to > items.length) {
        throw new Error('invalid argument to')
      }

      items.splice(to, 0, items.splice(from, 1)[0])
      this._record.set('value', items)
    })
  }

  @action clear = () => {
    when(() => this.isReady, () => this._record.set('value', []))
  }
}

export default function setup (store) {
  store.register('list', ListStore)
}
