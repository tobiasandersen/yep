import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditCategory from '../components/EditCategory'
import {
  closeEditCategoryModal,
  showQuestionDetails,
  createNewQuestion,
  saveQuestion,
  editQuestion,
  updateCard
} from '../actions/categories'

function mapStateToProps(state) {
  const { cards, selectedCategory, editingCard, editingQuestion } = state

  return {
    modalIsOpen: state.modals.editCategoryModalIsOpen,
    category: selectedCategory,
    cards,
    editingCard: editingCard === -1 ? {
      question: 'Write a question here',
      answer: 'Write the answer here',
      value: 1
    } : cards[editingCard],
    editingQuestion
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    closeEditCategoryModal,
    showQuestionDetails,
    createNewQuestion,
    saveQuestion,
    editQuestion,
    updateCard
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)
