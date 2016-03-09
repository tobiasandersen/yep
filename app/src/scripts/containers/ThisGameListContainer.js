import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ThisGameList from '../components/ThisGameList'
import { removePlayerFromGame } from '../actions/players'

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
    removePlayerFromGame
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ThisGameList)
