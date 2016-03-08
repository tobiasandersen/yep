import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { categoriesSelector } from '../selectors/categoriesSelectors'
import CategoryList from '../components/CategoryList'
import { openCategoryModal, closeCategoryModal } from '../actions/categoryList'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openCategoryModal, closeCategoryModal }, dispatch)
}

export default connect(categoriesSelector, mapDispatchToProps)(CategoryList)
