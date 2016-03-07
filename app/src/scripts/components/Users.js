import React, { PropTypes } from 'react'
import styles from 'styles/Users'
import User from './User'
import UserSearch from './UserSearch'

const Users = ({ users, searchUser }) => (
  <div className={styles.container}>
    <div className={styles.top}>
      Users
    </div>
    <UserSearch handleKeyPressed={searchUser}/>
    {users.map(user => (
      <User 
        key={user.id}
        name={user.name} />
    ))}
  </div>
)

Users.propTypes = {
  users: PropTypes.array.isRequired,
  searchUser: PropTypes.func.isRequired
}

export default Users
