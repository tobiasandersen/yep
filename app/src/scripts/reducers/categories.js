import { RECEIVE_CATEGORIES, ADD_NEW_CATEGORY } from '../constants/ActionTypes'

let categoryListId = 6
let categoriesId = 6

export function categoryIdList(state = [], action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      if (action.payload && action.payload.result && action.payload.result.categories) {
        return action.payload.result.categories
      }

      return state
    case ADD_NEW_CATEGORY:
      return [
        ...state,
        categoryListId++
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
    case ADD_NEW_CATEGORY:
      return {
        ...state,
        categoriesId: {
          id: categoriesId++,
          title: action.payload,
          cards: []
        }
      }
    default:
      return state
  }
}
