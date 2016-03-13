import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/LoadingSpinner'

const LoadingSpinner = () => (
  <div styleName="container">
    <div styleName="content">
      <div styleName="loading-spinner"></div>
      <h1 styleName="text">Waiting for game to start...</h1>
    </div>
  </div>
)

export default CSSModules(LoadingSpinner, styles)
