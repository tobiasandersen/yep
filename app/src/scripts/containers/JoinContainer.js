import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PlayFromPhone from '../components/PlayFromPhone'
import { addInteractivePlayer } from '../actions/players'

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPlayer: addInteractivePlayer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayFromPhone)
