import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const User = ({ user, handleClick }) => (
  <div styleName="list-item" onClick={() => { 
    handleClick(user) 
  }}>
    <div styleName="list-item-image">
    </div>
    <div styleName="list-item-name">
      {user.name}
    </div>
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(User, styles)
