import { categoriesResponse } from '../dummyData'
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
  SHOW_QUESTION_DETAILS
} from '../constants/ActionTypes'

export const addCategoryToGame = createAction(ADD_CATEGORY_TO_GAME)
export const removeCategoryFromGame = createAction(REMOVE_CATEGORY_FROM_GAME)

const sendEditCategory = createAction(EDIT_CATEGORY)

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
    showQuestionDetails(category.cards[0])
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

    // setTimeout(() => {
    //   const response = normalize(categoriesResponse, {
    //     categories: arrayOf(category)
    //   })
    //
    //   dispatch(receiveCategories(response)) 
    // }, 500)

    return fetch('http://localhost:8080/categories')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
    .then((response) => {
      console.log(response)
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
