import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cards from '../components/Cards'
import { selectCard } from '../actions/cards'

function mapStateToProps(state) {
  const { categories, selectedCard } = state

  return {
    categories,
    selectedCard
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)

