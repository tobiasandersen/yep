import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/User'

const User = ({ user, handleClick }) => (
  <div styleName="container" onClick={() => { 
    handleClick(user) 
  }}>
    <div styleName="username">
      {user.name}
    </div>
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(User, styles)
