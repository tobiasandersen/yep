import React, { PropTypes } from 'react'
import styles from 'styles/Users'
import User from './User'
import ButtonAdd from './ButtonAdd'

const Users = ({ users, addUserToGame }) => (
  <div className={styles.container}>
    <div className={styles.top}>
      Users
    </div>
    <ButtonAdd />
    {users.map(user => (
      <User 
        key={user.id}
        user={user}
        handleClick={addUserToGame} />
    ))}
  </div>
)

Users.propTypes = {
  users: PropTypes.array.isRequired,
  addUserToGame: PropTypes.func.isRequired
}

export default Users
