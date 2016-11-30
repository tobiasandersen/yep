import {
  RECEIVE_CATEGORIES,
  CLOSE_CARD, SELECT_CARD,
  SHOW_QUESTION_DETAILS,
  CLOSE_EDIT_CATEGORY_MODAL,
  CREATE_NEW_QUESTION,
  UPDATE_CARD
} from '../constants/ActionTypes'
import seed from '../../seed'

console.log({seed})

export function selectedCard(state = null, action) {
  switch(action.type) {
    case SELECT_CARD:
      return action.payload
    case CLOSE_CARD:
      return null
    default:
      return state
  }
}

export function cards(state = seed.cards, action) {
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
    case UPDATE_CARD:
      const changedCard = state[action.cardId]

      return action.changeArea === 'question' ? {
        ...state,
        ...changedCard,
        question: action.text
      } : {
        ...state,
        ...changedCard,
        answer: action.text
      }
    default:
      return state
  }
}

export function editingCard(state = null, action) {
  switch(action.type) {
    case SHOW_QUESTION_DETAILS:
      return action.payload
    case CLOSE_EDIT_CATEGORY_MODAL:
      return null
    case CREATE_NEW_QUESTION:
      return -1
    default:
      return state
  }
}

