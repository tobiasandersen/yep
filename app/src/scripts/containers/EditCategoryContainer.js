import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditCategory from '../components/EditCategory'
import {
  closeEditCategoryModal
} from '../actions/categories'

function mapStateToProps(state) {
  return {
    modalIsOpen: state.modals.editCategoryModalIsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    closeEditCategoryModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)
