import { RECEIVE_CATEGORIES } from '../constants/ActionTypes'

export function categoryIdList(state = [], action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      if (action.payload && action.payload.result && action.payload.result.categories) {
        return action.payload.result.categories
      }

      return state
    default:
      return state
  }
}

export function categories(state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      if (action.payload && action.payload.entities && action.payload.entities.categories) {
        return action.payload.entities.categories
      }

      return state
    default:
      return state
  }
}
