// require('es6-promise').polyfill()
// require('isomorphic-fetch')

import { createAction } from 'redux-actions'
import { 
    REQUEST_USERS, 
    RECEIVE_USERS, 
    SEARCH_USER, 
    ADD_USER_TO_GAME 
} from '../constants/ActionTypes'

import { usersResponse } from '../dummyData'

const requestUsers = createAction(REQUEST_USERS)
const receiveUsers = createAction(RECEIVE_USERS)
export const searchUser = createAction(SEARCH_USER)

export function addUserToGame(user) {
  type: ADD_USER_TO_GAME,
  user
}

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
