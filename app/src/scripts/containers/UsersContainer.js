import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Users from '../components/Users'
import { addUserToGame, closeUserModal, openUserModal } from '../actions/users'

function mapStateToProps(state) {
  return {
    users: state.users,
    userModalIsOpen: state.modals.userModalIsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUserToGame, closeUserModal, openUserModal }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
