import { createAction } from 'redux-actions'
import { 
  SOCKET_BUZZ,
  CONNECT_PLAYER,
  CREATE_NEW_GAME
} from '../constants/ActionTypes'

export const createNewGame = createAction(CREATE_NEW_GAME)

export function receiveEvent(event) {
  switch (event.event_type) {
    case 1:
      return {
        type: CREATE_NEW_GAME,
        payload: event.game
      }

    case 2: 
      return {
        type: CONNECT_PLAYER,
        payload: {
          name: event.name,
          sessionId: event.session_id
        }
      }

    case 3: 
      return {
        type: SOCKET_BUZZ,
        payload: event.playerId
      }

    default:
      return {
        type: null
      }
  }
}
