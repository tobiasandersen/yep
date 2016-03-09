import React from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from 'styles/GameSetupBox.css'

const ButtonStart = () => (
  <Link to="/board">
    <div styleName="button">
      Start Game
    </div>
  </Link>
)

export default CSSModules(ButtonStart, styles)
