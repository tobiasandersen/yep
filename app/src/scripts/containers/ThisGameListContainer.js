import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ThisGameList from '../components/ThisGameList'
import { removePlayerFromGame } from '../actions/players'
import { removeCategoryFromGame } from '../actions/categories'

function mapStateToProps(state) {
  const { categories, game } = state
  const { players, rounds } = game

  return {
    categories,
    players,
    rounds
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    removePlayerFromGame,
    removeCategoryFromGame
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ThisGameList)
