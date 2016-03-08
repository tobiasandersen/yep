import { RECEIVE_USERS, ADD_USER_TO_GAME } from '../constants/ActionTypes'

export function users(state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      if (action.payload) {
        return action.payload
      }
      return state
    default:
      return state
  }
}

export function players(state = [], action) {
  switch (action.type) {
    case ADD_USER_TO_GAME:
      let isAdded

      state.forEach((player) => {
        if (player.id === action.payload.id) {
          isAdded = true
        }
      })
      
      return isAdded ? state : [
        ...state,
        action.payload
      ]

    default:
      return state
  }
}

