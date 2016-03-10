import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Players from '../components/Players'
import { selectCard } from '../actions/cards'

function mapStateToProps(state) {
  return { players: state.game.players }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)

