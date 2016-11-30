import { createAction } from 'redux-actions'
import { normalize, Schema, arrayOf } from 'normalizr'
import {  
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  ADD_CATEGORY_TO_GAME,
  REMOVE_CATEGORY_FROM_GAME,
  REQUEST_NEW_CATEGORY,
  RECEIVE_NEW_CATEGORY,
  EDIT_CATEGORY,
  OPEN_EDIT_CATEGORY_MODAL,
  CLOSE_EDIT_CATEGORY_MODAL,
  SHOW_QUESTION_DETAILS,
  CREATE_NEW_QUESTION,
  SAVE_QUESTION,
  EDIT_QUESTION,
  UPDATE_CARD
} from '../constants/ActionTypes'

export const addCategoryToGame = createAction(ADD_CATEGORY_TO_GAME)
export const removeCategoryFromGame = createAction(REMOVE_CATEGORY_FROM_GAME)

const sendEditCategory = createAction(EDIT_CATEGORY)
export const createNewQuestion = createAction(CREATE_NEW_QUESTION)
export const saveQuestion = createAction(SAVE_QUESTION)
export const editQuestion = createAction(EDIT_QUESTION)

export function updateCard(cardId, changeArea, text) {
  type: UPDATE_CARD,
  cardId,
  changeArea,
  text
}

const requestCategories = createAction(REQUEST_CATEGORIES)
const receiveCategories = createAction(RECEIVE_CATEGORIES)
const requestNewCategory = createAction(REQUEST_NEW_CATEGORY)
const receiveNewCategory = createAction(RECEIVE_NEW_CATEGORY)

const openEditCategoryModal= createAction(OPEN_EDIT_CATEGORY_MODAL)
export const closeEditCategoryModal = createAction(CLOSE_EDIT_CATEGORY_MODAL)
export const showQuestionDetails = createAction(SHOW_QUESTION_DETAILS)

const category = new Schema('categories')
const card = new Schema('cards')

category.define({
  cards: arrayOf(card)
})

export function editCategory(category) {
  return [
    sendEditCategory(category),
    openEditCategoryModal(),
    category.cards.length > 0 ? showQuestionDetails(category.cards[0]) : null
  ]
}

export function addNewCategory(title) {
  return dispatch => {
    dispatch(requestNewCategory(title))

    setTimeout(() => {
      dispatch(receiveNewCategory(simulateCategoryResponse(title))) 
    }, 500)
  }
}

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())

    return fetch('/categories')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
    .then((response) => {
      const responseObject = {}
      responseObject.categories = response
      response = normalize(responseObject, {
        categories: arrayOf(category)
      })
      dispatch(receiveCategories(response)) 
    })

  }
}

let id = 100

function simulateCategoryResponse(title) {
  return {
    id: id++,
    title,
    cards: []
  }
}
