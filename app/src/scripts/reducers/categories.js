import { SELECT_CARD } from '../constants/ActionTypes'

export function selectedCard(state = null, action) {
  switch(action.type) {
    case SELECT_CARD:
      return action.payload
    default: 
      return state
  }
}

export function categories(state = [], action) {
  switch(action.type) {
    default:
      return state
  }
}

