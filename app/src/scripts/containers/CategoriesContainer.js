import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { selectCard } from '../actions/cards'

function mapStateToProps(state) {
  const { cards, categories, categoryIdList, selectedCard } = state

  return {
    categories: categoryIdList.map(id => categories[id]),
    cards,
    selectedCard
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

