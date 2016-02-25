import { combineReducers } from 'redux'
import { categories, selectedCard } from './categories'

export default combineReducers({
  selectedCard,
  categories
})

