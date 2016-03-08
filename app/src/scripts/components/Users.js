import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'
import User from './User'
import ButtonAdd from './ButtonAdd'
import AddNewUser from './AddNewUser'

const Users = ({ users, addUserToGame, userModalIsOpen, openUserModal, closeUserModal }) => (
  <div styleName="container">
    <div styleName="title">
      <h3>Users</h3>
    </div>
    <div styleName="list">
      {users.map(user => (
        <User 
          key={user.id}
          user={user}
          handleClick={addUserToGame} />
      ))}
    </div>
    <ButtonAdd handleClick={openUserModal}/>
    <AddNewUser 
      modalIsOpen={userModalIsOpen} 
      closeModal={closeUserModal} />
  </div>
)

Users.propTypes = {
  users: PropTypes.array.isRequired,
  addUserToGame: PropTypes.func.isRequired,
  userModalIsOpen: PropTypes.bool.isRequired,
  closeUserModal: PropTypes.func.isRequired,
  openUserModal: PropTypes.func.isRequired
}

export default CSSModules(Users, styles)