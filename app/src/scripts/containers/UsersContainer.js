import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Users from '../components/Users'
import searchUser from '../actions/users'
import addUserToGame from '../actions/users'

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchUser: () => (
      dispatch(searchUser)
    ),
    addUserToGame: () => (
      dispatch(addUserToGame)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
