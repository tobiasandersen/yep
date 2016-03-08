// require('es6-promise').polyfill()
// require('isomorphic-fetch')

import { createAction } from 'redux-actions'
import { 
    REQUEST_USERS, 
    RECEIVE_USERS, 
    ADD_USER_TO_GAME,
    CLOSE_USER_MODAL,
    OPEN_USER_MODAL
} from '../constants/ActionTypes'

import { usersResponse } from '../dummyData'

const requestUsers = createAction(REQUEST_USERS)
const receiveUsers = createAction(RECEIVE_USERS)

export const addUserToGame = createAction(ADD_USER_TO_GAME)
export const closeUserModal = createAction(CLOSE_USER_MODAL)
export const openUserModal = createAction(OPEN_USER_MODAL)

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers())

    setTimeout(() => {
      dispatch(receiveUsers(usersResponse)) 
    }, 500)

    // Use this once we have a server :)
    //
    // return fetch('/users')
    // .then((response) => {
    //   if (response.status >= 400) {
    //     throw new Error('Bad response from server')
    //   }
    //   return response.json()
    // })
    // .then((response) => {
    //   dispatch(receiveUsers(response))
    // })
  }
}
