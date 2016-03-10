import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditCategory from '../components/EditCategory'
import {
  closeEditCategoryModal
} from '../actions/categories'

function mapStateToProps(state) {
  const { cards, selectedCategory } = state

  return {
    modalIsOpen: state.modals.editCategoryModalIsOpen,
    category: state.selectedCategory,
    cards
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    closeEditCategoryModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)
