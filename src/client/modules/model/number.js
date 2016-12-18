import { RecordAtom, computed, action } from 'lib/mobx'

export class NumberStore {

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
      rec = new NumberRecord(this, id)
      this._records.set(id, rec)
    }
    return rec
  }
}

class NumberRecord {

  id: string

  constructor (store, id) {
    this.store = store
    this.id = id
    this._record = new RecordAtom(id)
  }

  toJS = () => {
    return this.toString()
  }

  toString = () => {
    return this._record.get('value')
  }

  @computed get isReady () {
    return this._record.isReady
  }

  @action init = (value) => {
    this._record.set('value', value)
    return this
  }

  @action set = (value) => {
    this._record.set('value', value)
  }
}

export default function setup (store) {
  store.register('number', NumberStore)
}
