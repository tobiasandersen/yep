import { createAction } from 'redux-actions'
import { REQUEST_GAME, RECEIVE_GAME } from '../constants/ActionTypes'

const requestGame = createAction(REQUEST_GAME)
const receiveGame = createAction(RECEIVE_GAME)

export function initGame() {
     
}

