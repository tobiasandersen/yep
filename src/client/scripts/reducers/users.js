import {
  CONNECT_PLAYER,
  RECEIVE_USERS,
  ADD_NEW_USER
} from '../constants/ActionTypes'

let userId = 21

function createUser(name, sessionId = null) {
  return {
    id: userId++,
    name,
    points: 1,
    sessionId
  }
}

export function users(state = [
  createUser('Joel'),
  createUser('Johan'),
  createUser('Olle')
], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.payload ? action.payload : state

    case ADD_NEW_USER:
      return [
        ...state,
        createUser(action.payload)
      ]

    case CONNECT_PLAYER:
      const { name, sessionId } = action.payload
      return [
        ...state,
        createUser(name, sessionId)
      ]

    default:
      return state
  }
}

