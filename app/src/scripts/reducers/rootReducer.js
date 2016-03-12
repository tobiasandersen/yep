import { combineReducers } from 'redux'
import { 
  categories, 
  categoryIdList, 
  selectedCategory, 
  editingQuestion 
} from './categories'
import { cards, selectedCard, editingCard } from './cards'
import { users, players } from './users'
import { modals } from './modals'
import game from './game'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  cards,
  categories,
  categoryIdList,
  selectedCard,
  selectedCategory,
  editingCard,
  editingQuestion,
  users,
  modals,
  players,
  game,
  routing: routerReducer
})

