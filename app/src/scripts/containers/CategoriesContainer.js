import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { selectCard } from '../actions/cards'
import { categoriesSelector } from '../selectors/categoriesSelectors'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCard }, dispatch)
}

export default connect(categoriesSelector, mapDispatchToProps)(Categories)

