import { 
  CONNECT_PLAYER,
  CREATE_NEW_GAME,
  REGISTER_ANSWER
} from '../constants/ActionTypes'

export default function play(state = {
  game: {},
  sessionId: null
}, action) {
  switch(action.type) {

    case CREATE_NEW_GAME:
      const game = action.payload
      game.hasStarted = true

      return {
        ...state,
        game
      }

    case CONNECT_PLAYER:
      const { sessionId } = action.payload

      return {
        ...state,
        sessionId
      }

    case REGISTER_ANSWER:
    default:
      return state
  }
}
