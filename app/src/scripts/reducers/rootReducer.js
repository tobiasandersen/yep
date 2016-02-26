import { combineReducers } from 'redux'
import { categories, categoryIdList } from './categories'
import { cards, selectedCard } from './cards'
import { users } from './users'

export default combineReducers({
  cards,
  categories,
  categoryIdList,
  selectedCard,
  users
})

