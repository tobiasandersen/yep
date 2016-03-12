import { createAction } from 'redux-actions'
import { closeCard } from './cards'
import { addNewUser } from './users'
import { 
  REMOVE_PLAYER_FROM_GAME,
  REGISTER_ANSWER,
  ADD_INTERACTIVE_PLAYER
} from '../constants/ActionTypes'

export const removePlayerFromGame = createAction(REMOVE_PLAYER_FROM_GAME)
export const addInteractivePlayer = createAction(ADD_INTERACTIVE_PLAYER)

const sendAnswer = createAction(REGISTER_ANSWER)

export function registerAnswer(payload) {
  return [
    sendAnswer(payload),
    closeCard(payload.cardId)
  ]
}

