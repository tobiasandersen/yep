import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CategoryList from '../components/CategoryList'
import { openCategoryModal, closeCategoryModal, addNewCategory } from '../actions/categoryList'


function mapStateToProps(state) {
  const { categories, categoryIdList } = state
  const categoryModalIsOpen = state.modals.categoryModalIsOpen

  return {
    categories: categoryIdList.map(id => categories[id]),
    categoryModalIsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openCategoryModal, closeCategoryModal, addNewCategory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
