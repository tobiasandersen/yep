import WSInstance from 'scripts/utils/PlayerWebsocket'
import { receiveEvent } from 'actions/events'
import { 
  ADD_INTERACTIVE_PLAYER, 
  BUZZ,
  START_GAME 
} from 'constants/ActionTypes'

export default function(store) {
  const socket = new WSInstance('localhost:8080/events', wsDispatcher)

  function wsDispatcher(event) {
    return store.dispatch(receiveEvent(event))
  }

  function wsListener() {
    const { lastAction } = store.getState()

    switch (lastAction.type) {

      case START_GAME:
        return socket.startGame(lastAction.payload)

      case BUZZ:
        return socket.buzz(lastAction.payload)

      case ADD_INTERACTIVE_PLAYER:
        return socket.addPlayer(lastAction.payload)

      default:
        return
    }
  }

  store.subscribe(() => wsListener())
}
