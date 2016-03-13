import { createAction } from 'redux-actions'
import { BUZZ, START_GAME } from '../constants/ActionTypes'

export const startGame = createAction(START_GAME)
export const buzz = createAction(BUZZ)
