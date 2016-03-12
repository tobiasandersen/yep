import { 
  CONNECT_PLAYER,
  RECEIVE_USERS, 
  ADD_USER_TO_GAME,
  REGISTER_ANSWER,
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

// export function players(state = [], action) {
//   switch (action.type) {
//     //TODO: REMOVE 
//     case RECEIVE_USERS:
//       return action.payload.filter((user, i) => i < 5).map(player => createPlayer(player))
//
//     case REGISTER_ANSWER: 
//       const { playerId, value, wasCorrect } =  action.payload
//       return state.map(player => {
//         if (playerId === player.id) {
//           player.score += wasCorrect ? value : -value
//         }
//         return player
//       })
//
//     case ADD_USER_TO_GAME:
//       let isAdded
//
//       state.forEach((player) => {
//         if (player.id === action.payload.id) {
//           isAdded = true
//         }
//       })
//       
//       return isAdded ? state : [
//         ...state,
//         createPlayer(action.payload)
//       ]
//
//     default:
//       return state
//   }
// }

function createPlayer(user) {
  return {
    ...user,
    score: 0
  }
}

