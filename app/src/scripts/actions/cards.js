import { createAction } from 'redux-actions'
import { SELECT_CARD, CLOSE_CARD, REGISTER_ANSWER } from '../constants/ActionTypes'

export const selectCard = createAction(SELECT_CARD)
export const closeCard = createAction(CLOSE_CARD)
export const registerAnswer = createAction(REGISTER_ANSWER)

