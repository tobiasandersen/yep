import { RECEIVE_USERS, ADD_USER_TO_GAME } from '../constants/ActionTypes'

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
    case RECEIVE_USERS:
      return action.payload.filter((user, i) => i < 5)
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

