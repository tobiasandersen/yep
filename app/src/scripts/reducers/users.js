import { RECEIVE_USERS, SEARCH_USER } from '../constants/ActionTypes'

export function users(state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      if (action.payload) {
        return action.payload
      }
      return state
    case SEARCH_USER:
      console.log('Reducer')
      return state.filter(name => name.includes(action.payload))
    default:
      return state
  }
}

