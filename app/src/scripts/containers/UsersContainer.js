import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Users from '../components/Users'
import { addUserToGame } from '../actions/users'

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUserToGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
