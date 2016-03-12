import { combineReducers } from 'redux'
import { categories, categoryIdList, selectedCategory } from './categories'
import { cards, selectedCard } from './cards'
import { users, players } from './users'
import { modals } from './modals'
import screen from './screen'
import game from './game'
import lastAction from './last-action'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  cards,
  categories,
  lastAction,
  categoryIdList,
  selectedCard,
  selectedCategory,
  users,
  modals,
  players,
  game,
  screen,
  routing: routerReducer
})

