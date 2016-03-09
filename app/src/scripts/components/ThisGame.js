import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'
import ThisGameListContainer from '../containers/ThisGameListContainer'

const ThisGame = () => (
  <div styleName="container-dark">
    <div styleName="title">
      <h3>This Game</h3>
    </div>
    <ThisGameListContainer />
  </div>
)

export default CSSModules(ThisGame, styles)
