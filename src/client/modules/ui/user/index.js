import { extendObservable, computed, action  } from 'mobx'

class UserStore {

  _records = new Map()

  constructor (store) {
    this.store = store
  }

  get = id => {
    let record = this._records.get(id)

    if (!record) {
      record = new UserRecord(this, id)
      this._records.set(id, record)
    }

    return record
  }

}

class UserRecord {

  constructor (store, id) {
    this.store = store
    this.id = id
    this.games = store.store.get('list').get(id, 'user.games')
  }

  @action init = () => {
    this.games.init([])
  }

}

export default (store) => {
  store.register('user', UserStore)
}
