import { 
  ADD_USER_TO_GAME,
  REGISTER_ANSWER,
  REMOVE_PLAYER_FROM_GAME
} from '../constants/ActionTypes'

function createPlayer(user) {
  return {
    ...user,
    score: 0
  }
}

function players(state = [], action) {
  switch (action.type) {
    case REGISTER_ANSWER: 
      const { playerId, value, wasCorrect } =  action.payload
      return state.map(player => {
        if (playerId === player.id) {
          player.score += wasCorrect ? value : -value
        }
        return player
      })

    case REMOVE_PLAYER_FROM_GAME:
      return state.filter(player => player.id !== action.payload)

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

export default function game(state = {
  players: [],
  rounds: [
    { 
      roundNumber: 1,
      categoryIds: []
    },
    { 
      roundNumber: 2,
      categoryIds: []
    }
  ]
}, action) {
  switch (action.type) {
    case REGISTER_ANSWER: 
    case REMOVE_PLAYER_FROM_GAME: 
    case ADD_USER_TO_GAME:
      return {
        ...state,
        players: players(state.players, action)
      }
    default:
      return state
  }
}

