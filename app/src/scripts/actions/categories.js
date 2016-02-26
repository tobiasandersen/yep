// require('es6-promise').polyfill()
// require('isomorphic-fetch')

import { createAction } from 'redux-actions'
import { normalize, Schema, arrayOf } from 'normalizr'
import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../constants/ActionTypes'

import { categoriesResponse } from '../dummyData'

const requestCategories = createAction(REQUEST_CATEGORIES)
const receiveCategories = createAction(RECEIVE_CATEGORIES)

const category = new Schema('categories')
const card = new Schema('cards')

category.define({
  cards: arrayOf(card)
})

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())

    setTimeout(() => {
      const response = normalize(categoriesResponse, {
        categories: arrayOf(category)
      })

      dispatch(receiveCategories(response)) 
    }, 500)

    // Use this once we have a server :)
    //
    // return fetch('/categories')
    // .then((response) => {
    //   if (response.status >= 400) {
    //     throw new Error('Bad response from server')
    //   }
    //   return response.json()
    // })
    // .then((response) => {
    //   dispatch(receiveCategories(response))
    // })
  }
}
