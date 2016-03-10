import { createAction } from 'redux-actions'
import { closeCard } from './cards'
import { 
  REMOVE_PLAYER_FROM_GAME,
  REGISTER_ANSWER
} from '../constants/ActionTypes'

export const removePlayerFromGame = createAction(REMOVE_PLAYER_FROM_GAME)

const sendAnswer = createAction(REGISTER_ANSWER)

export function registerAnswer(payload) {
  return [
    sendAnswer(payload),
    closeCard(payload.cardId)
  ]
}

