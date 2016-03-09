import { 
  RECEIVE_CATEGORIES,
  RECEIVE_NEW_CATEGORY
} from '../constants/ActionTypes'

export function categoryIdList(state = [], action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      if (action.payload && action.payload.result && action.payload.result.categories) {
        return action.payload.result.categories
      }

      return state

    case RECEIVE_NEW_CATEGORY:
      return [
        ...state,
        action.payload.id
      ]

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

    case RECEIVE_NEW_CATEGORY:
      const category = action.payload
      const newCategory = {}
      newCategory[category.id] = category

      return {
        ...state,
        ...newCategory 
      }

    default:
      return state
  }
}
