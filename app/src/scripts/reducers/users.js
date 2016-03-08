import { 
  RECEIVE_USERS, 
  ADD_USER_TO_GAME,
  REGISTER_ANSWER
} from '../constants/ActionTypes'

export function users(state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.payload ? action.payload : state
    default:
      return state
  }
}

export function players(state = [], action) {
  switch (action.type) {
    //TODO: REMOVE 
    case RECEIVE_USERS:
      return action.payload.filter((user, i) => i < 5).map(player => createPlayer(player))

    case REGISTER_ANSWER: 
      const { playerId, value, wasCorrect } =  action.payload
      return state.map(player => {
        if (playerId === player.id) {
          player.score += wasCorrect ? value : -value
        }
        return player
      })

    case ADD_USER_TO_GAME:
      let isAdded

      state.forEach((player) => {
        if (player.id === action.payload.id) {
          isAdded = true
        }
      })
      
      return isAdded ? state : [
        ...state,
        createPlayer(action.payload)
      ]

    default:
      return state
  }
}

function createPlayer(user) {
  return {
    ...user,
    score: 0
  }
}

