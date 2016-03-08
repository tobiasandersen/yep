import { createAction } from 'redux-actions'
import { closeCard } from './cards'
import { REGISTER_ANSWER } from '../constants/ActionTypes'

const sendAnswer = createAction(REGISTER_ANSWER)

export function registerAnswer(payload) {
  return [
    sendAnswer(payload),
    closeCard(payload.cardId)
  ]
}

