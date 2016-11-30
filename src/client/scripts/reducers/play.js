import { 
  ADD_INTERACTIVE_PLAYER,
  CONNECT_PLAYER,
  CREATE_NEW_GAME,
  REGISTER_ANSWER
} from '../constants/ActionTypes'

export default function play(state = {
  game: {},
  sessionId: null,
  name: ''
}, action) {
  switch(action.type) {

    case ADD_INTERACTIVE_PLAYER:
      const name = action.payload

      return {
        ...state,
        name
      }

    case CREATE_NEW_GAME:
      const game = action.payload
      game.hasStarted = true

      return {
        ...state,
        game
      }

    case CONNECT_PLAYER:
      return (state.name === action.payload.name) 
        ? {
          ...state,
          sessionId: action.payload.sessionId
        } : state

    case REGISTER_ANSWER:
    default:
      return state
  }
}
