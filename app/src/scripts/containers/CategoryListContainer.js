import { connect } from 'react-redux'
import { categoriesSelector } from '../selectors/categoriesSelectors'
import CategoryList from '../components/CategoryList'

export default connect(categoriesSelector)(CategoryList)
