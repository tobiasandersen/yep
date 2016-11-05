import { createAction } from 'redux-actions'
import { OPEN_CATEGORY_MODAL, CLOSE_CATEGORY_MODAL } from '../constants/ActionTypes'

export const openCategoryModal = createAction(OPEN_CATEGORY_MODAL)
export const closeCategoryModal = createAction(CLOSE_CATEGORY_MODAL)
