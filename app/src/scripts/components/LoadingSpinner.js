import React from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from 'styles/LoadingSpinner'

const LoadingSpinner = ({ text, theme = 'dark' }) => (
  <div styleName={classNames({
    'container': true,
    'light': theme === 'light'
  })}>
    <div styleName="content">
      <div styleName="loading-spinner"></div>
      {text && <h1 styleName="text">{text}</h1>}
    </div>
  </div>
)

export default CSSModules(LoadingSpinner, styles, { allowMultiple: true })
