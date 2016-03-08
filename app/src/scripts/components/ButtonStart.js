import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const ButtonStart = () => (
  <div styleName="button">
    Start Game
  </div>
)

export default CSSModules(ButtonStart, styles)
