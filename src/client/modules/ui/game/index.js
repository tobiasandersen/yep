import { extendObservable, computed, action  } from 'mobx'

class GameStore {

  _records = new Map()

  constructor (store) {
    this.store = store
  }

  get = id => {
    id = `game/${id}`

    let record = this._records.get(id)

    if (!record) {
      record = new GameRecord(this.store, this, id)
      this._records.set(id, record)
    }

    return record
  }

}

class GameRecord {

  constructor (store, parent, id) {
    this.store = store
    this.parent = parent
    this.id = id
  }

  @computed get title () {
    return this.store.get('text').get(this.id).toJS()
  }

}

export default (store) => {
  store.register('game', GameStore)
}
