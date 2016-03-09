import { 
  REGISTER_ANSWER,
  ADD_USER_TO_GAME,
  REMOVE_PLAYER_FROM_GAME,
  ADD_CATEGORY_TO_GAME,
  REMOVE_CATEGORY_FROM_GAME
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

function rounds(state = [
  { 
    roundNumber: 1,
    categoryIds: []
  },
  { 
    roundNumber: 2,
    categoryIds: []
  }
], action) {
  switch (action.type) {
    case ADD_CATEGORY_TO_GAME:
      const newId = action.payload

      const isAlreadyAdded = state
        .reduce((isAdded, current) => (
          isAdded || current.categoryIds.indexOf(newId) > -1
        ), false)
      
      let didAddCategory = false

      return isAlreadyAdded 
        ? state 
        : state.map(round => {
          if (round.categoryIds.length < 5 && !didAddCategory) {
            round.categoryIds.push(action.payload)
            didAddCategory = true
          }

          return round
        })

    case REMOVE_CATEGORY_FROM_GAME:
      return state.map(round => {
        round.categoryIds.pop(action.payload)
        return round
      })
        
    default:
      return state
  }
}

export default function game(state = {
  players: players(state, action),
  rounds: rounds(state, action)
}, action) {
  switch (action.type) {
    case REGISTER_ANSWER: 
    case REMOVE_PLAYER_FROM_GAME: 
    case ADD_USER_TO_GAME:
      return {
        ...state,
        players: players(state.players, action)
      }

    case ADD_CATEGORY_TO_GAME:
    case REMOVE_CATEGORY_FROM_GAME:
      return {
        ...state,
        rounds: rounds(state.rounds, action)
      }

    default:
      return state
  }
}

