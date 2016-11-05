import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  RECEIVE_NEW_CATEGORY,
  EDIT_CATEGORY,
  CREATE_NEW_QUESTION,
  SAVE_QUESTION,
  EDIT_QUESTION,
  CLOSE_EDIT_CATEGORY_MODAL
} from '../constants/ActionTypes'
import { categories as seed } from '../../seed'

export function selectedCategory(state = {}, action) {
  switch (action.type) {
    case EDIT_CATEGORY:
      return action.payload
    default:
      return state
  }
}

export function editingQuestion(state = false, action) {
  switch(action.type) {
    case CREATE_NEW_QUESTION:
      return true
    case SAVE_QUESTION:
      return false
    case EDIT_QUESTION:
      return true
    case CLOSE_EDIT_CATEGORY_MODAL:
      return false
    default:
      return state
  }
}

export function categoryIdList(state = {
  isFetching: false,
  items: seed.map(({id}) => id)
}, action) {
  switch(action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CATEGORIES:
      if (action.payload && action.payload.result && action.payload.result.categories) {
        return {
          ...state,
          items: action.payload.result.categories,
          isFetching: false
        }
      }

      return state

    case RECEIVE_NEW_CATEGORY:
      return {
        ...state,
        isFetching: false,
        items: [
          ...state.items,
          action.payload.id
        ]
      }

    default:
      return state
  }
}

export function categories(state = { ...seed }, action) {
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
