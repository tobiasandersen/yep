import React, { PropTypes } from 'react'
import styles from 'styles/User.css'

const User = ({ name }) => (
  <div className={styles.container}>
    <div className={styles.image}>
    </div>
    <div className={styles.name}>
      {name}
    </div>
  </div>
)

User.propTypes = {
  name: PropTypes.string.isRequired
}

export default User
