import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditCategory from '../components/EditCategory'
import {
  closeEditCategoryModal,
  showQuestionDetails
} from '../actions/categories'

function mapStateToProps(state) {
  const { cards, selectedCategory, editingCard } = state

  return {
    modalIsOpen: state.modals.editCategoryModalIsOpen,
    category: selectedCategory,
    cards,
    editingCard: cards[editingCard]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    closeEditCategoryModal,
    showQuestionDetails
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)
