import { createAction } from 'redux-actions'
import { 
  CONNECT_PLAYER,
  CREATE_NEW_GAME
} from '../constants/ActionTypes'

export const createNewGame = createAction(CREATE_NEW_GAME)

export function receiveEvent(event) {
  console.log('receiveEvent', event)
  
  switch (event.event_type) {
    case 1:
      return {
        type: 'TEST',
        payload: event.name
      }

    case 2: 
      return {
        type: CONNECT_PLAYER,
        payload: event.name
      }

    default:
      return {
        type: null
      }
  }
}
