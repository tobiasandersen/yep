import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/Welcome'
import { browserHistory } from 'react-router'

const Welcome = () => (
  <div styleName="container">
    <div styleName="content">

      <div styleName="button" onClick={() => browserHistory.push('/new')}>
        Create your own game
      </div>

      <div styleName="button" onClick={() => browserHistory.push('/join')}>
        Join a game
      </div>

    </div>
  </div>
)

export default CSSModules(Welcome, styles)
