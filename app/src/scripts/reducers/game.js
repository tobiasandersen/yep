import { 
  REGISTER_ANSWER,
  ADD_USER_TO_GAME,
  REMOVE_PLAYER_FROM_GAME,
  ADD_CATEGORY_TO_GAME,
  REMOVE_CATEGORY_FROM_GAME,
  CLOSE_CARD,
  SOCKET_BUZZ
} from '../constants/ActionTypes'

export const IDLE = 'IDLE'
export const ANSWERING = 'ANSWERING'
export const GAVE_CORRECT_ANSWER = 'GAVE_CORRECT_ANSWER'
export const GAVE_INCORRECT_ANSWER = 'GAVE_INCORRECT_ANSWER'

function createPlayer(user) {
  return {
    ...user,
    score: 0,
    status: IDLE
  }
}

function players(state = [], action) {
  switch (action.type) {
    case SOCKET_BUZZ:
      return state.map(player => {

        if (action.payload === player.id) {
          player.status = ANSWERING 
        }

        return player
      })

    case REGISTER_ANSWER: 
      const { playerId, value, wasCorrect } =  action.payload
      return state.map(player => {

        if (playerId === player.id) {
          player.score += wasCorrect ? value : -value
          player.status = IDLE
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
        const index = round.categoryIds.indexOf(action.payload)

        if (index > -1) {
          round.categoryIds.splice(index, 1)
        }

        return round
      })
        
    default:
      return state
  }
}

let closedCards = 0

export default function game(state = {
  id: 1,
  currentRound: 1,
  isShowingAnswer: false,
  players: players(state, action),
  rounds: rounds(state, action)
}, action) {
  switch (action.type) {
    case REGISTER_ANSWER:
    case REMOVE_PLAYER_FROM_GAME: 
    case ADD_USER_TO_GAME:
    case SOCKET_BUZZ:
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

    case CLOSE_CARD:
      return (++closedCards === 25) 
        ? {
          ...state,
          currentRound: 2
        }
        : state

    default:
      return state
  }
}

