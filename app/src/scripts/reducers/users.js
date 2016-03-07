import { RECEIVE_USERS, ADD_USER_TO_GAME } from '../constants/ActionTypes'

export function users(state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      if (action.payload) {
        return action.payload
      }
      return state
    case ADD_USER_TO_GAME:
      let newState = state
      newState.map(user => {
        if (action.id === user.id) {
          return Object.assign({}, user, {
            isPlayer: true
          })
        }
      })
      return newState
    default:
      return state
  }
}

