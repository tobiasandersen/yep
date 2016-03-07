import React, { PropTypes } from 'react'
import styles from 'styles/User.css'

const User = ({ user, handleClick }) => (
  <div className={styles.container} onClick={() => handleClick(user.id)}>
    <div className={styles.image}>
    </div>
    <div className={styles.name}>
      {user.name}
    </div>
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default User
