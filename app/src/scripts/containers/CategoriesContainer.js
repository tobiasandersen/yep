import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { selectCard } from '../actions/cards'

function mapStateToProps(state) {
  const { cards, categories, game, selectedCard } = state
  const { currentRound, rounds } = game
  const categoryIdsForCurrentRound = rounds
  .filter(round => round.roundNumber === currentRound)[0]
  .categoryIds
  
  return {
    categories: categoryIdsForCurrentRound.map(id => categories[id]),
    cards,
    selectedCard
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

