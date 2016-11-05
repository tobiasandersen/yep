import { 
  OPEN_USER_MODAL, 
  CLOSE_USER_MODAL, 
  OPEN_CATEGORY_MODAL, 
  CLOSE_CATEGORY_MODAL,
  OPEN_EDIT_CATEGORY_MODAL,
  CLOSE_EDIT_CATEGORY_MODAL
} from '../constants/ActionTypes'

export function modals(state = { 
  userModalIsOpen: false, 
  categoryModalIsOpen: false,
  editCategoryModalIsOpen: false 
}, action) {
  switch (action.type) {
    case OPEN_USER_MODAL:
      return {
        ...state,
        userModalIsOpen: true
      }
    case CLOSE_USER_MODAL:
      return {
        ...state,
        userModalIsOpen: false
      }
    case OPEN_CATEGORY_MODAL:
      return {
        ...state,
        categoryModalIsOpen: true
      }
    case CLOSE_CATEGORY_MODAL:
      return {
        ...state,
        categoryModalIsOpen: false
      }
    case OPEN_EDIT_CATEGORY_MODAL:
      return {
        ...state,
        editCategoryModalIsOpen: true
      }
    case CLOSE_EDIT_CATEGORY_MODAL:
      return {
        ...state,
        editCategoryModalIsOpen: false
      }
    default:
      return state
  }
}
