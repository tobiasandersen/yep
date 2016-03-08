import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'
import ThisGameList from './ThisGameList'
import ButtonStart from './ButtonStart'

const ThisGame = () => (
  <div styleName="container-dark">
    <div styleName="title">
      <h3>This Game</h3>
    </div>
    <ThisGameList />
    <ButtonStart />
  </div>
)

export default CSSModules(ThisGame, styles)
