import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/User'
import Icon from './Icon'
import Glyphs from '../glyphs' 

const User = ({ user, handleClick }) => (
  <div styleName="container" onClick={() => { 
    handleClick(user) 
  }}>
    <div styleName="username">
      {user.name}
    </div>

    { user.sessionId && 
      <span styleName="phone-icon">
        <Icon 
          height={30}
          width={30}
          glyph={Glyphs.smartphone} 
        />
      </span>
    }

  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(User, styles)
