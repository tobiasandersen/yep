import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Play from '../components/Play'
import { buzz } from '../actions/game'

function mapStateToProps(state) {
  const { game, sessionId } = state.play

  const hasStarted = game.hasStarted != null
  
  return hasStarted 
    ? {
      hasStarted: true,
      player: game
        .players
        .filter(player => player.sessionId === sessionId)
        [0]
    } : {
      hasStarted: false,
      player: null
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ buzz }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
