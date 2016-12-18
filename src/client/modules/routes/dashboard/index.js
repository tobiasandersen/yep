import { extendObservable, computed, action } from 'mobx'
import ds from 'lib/deepstream'
import cuid from 'cuid'
import Game from '../../ui/game'

class DashboardStore {

  _games = new Map()

  constructor (store) {
    this.store = store
  }

  getGame = id => {
    let game = this._games.get(id)

    if (!game) {
      game = this.store.get('game').get(id)
      game && this._games.set(id, game)
    }

    return game
  }

  @computed get currentUser () {
    return this.store.get('user').get('tobias')
  }

  @computed get gamesRecord () {
    return this.currentUser && this.currentUser.games
  }

  @computed get games () {
    return ((this.gamesRecord && this.gamesRecord.items) || []).map(this.getGame)
  }

  @action createGame = () => {
    const gameId = cuid()

    if (gameId) {
      this.gamesRecord.insert(this.games.length, gameId)
    }

    this.store.get('routing').changeLocation('/test')
  }

}

export default (store) => {
  store.register('dashboard', DashboardStore)
}
