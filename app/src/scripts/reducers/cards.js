import { RECEIVE_CATEGORIES, SELECT_CARD } from '../constants/ActionTypes'

export function selectedCard(state = null, action) {
  switch(action.type) {
    case SELECT_CARD:
      return action.payload
    default: 
      return state
  }
}

export function cards(state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      if (action.payload && action.payload.entities && action.payload.entities.cards) {
        return action.payload.entities.cards
      }

      return state
    default:
      return state
  }
}
