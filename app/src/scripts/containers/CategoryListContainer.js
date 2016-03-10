import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CategoryList from '../components/CategoryList'
import { 
  addCategoryToGame, 
  addNewCategory, 
  editCategory,
  openEditCategoryModal 
} from '../actions/categories'
import { openCategoryModal, closeCategoryModal } from '../actions/categoryList'

function mapStateToProps(state) {
  const { categories, categoryIdList } = state
  const categoryModalIsOpen = state.modals.categoryModalIsOpen

  return {
    categories: categoryIdList.map(id => categories[id]),
    categoryModalIsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    openCategoryModal,
    closeCategoryModal,
    addCategoryToGame,
    addNewCategory,
    editCategory,
    openEditCategoryModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
