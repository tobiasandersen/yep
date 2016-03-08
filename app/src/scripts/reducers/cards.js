import { 
  RECEIVE_CATEGORIES, 
  CLOSE_CARD, SELECT_CARD
} from '../constants/ActionTypes'

export function selectedCard(state = null, action) {
  switch(action.type) {
    case SELECT_CARD:
      return action.payload
    case CLOSE_CARD:
      return null
    // case RECEIVE_CATEGORIES:
    //   return 2
    default: 
      return state
  }
}

export function cards(state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return (action.payload && action.payload.entities && action.payload.entities.cards)
        ? action.payload.entities.cards
        : state
    case CLOSE_CARD:
      const closedCard = state[action.payload]
      closedCard.isPicked = true

      return {
        ...state,
        ...closedCard
      }
    default:
      return state
  }
}
