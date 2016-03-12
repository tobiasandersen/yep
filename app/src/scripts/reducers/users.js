import { 
  CONNECT_PLAYER,
  RECEIVE_USERS, 
  ADD_NEW_USER
} from '../constants/ActionTypes'

let userId = 5

function createUser(name, isInteractive = false) {
  return {
    id: userId++,
    name,
    image_url: 'hello.jpg',
    isInteractive
  }
}


export function users(state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.payload ? action.payload : state
    case ADD_NEW_USER:
      return [
        ...state, 
        createUser(action.payload)
      ]

    case CONNECT_PLAYER:
      return [
        ...state,
        createUser(action.payload, true)
      ]
    default:
      return state
  }
}

