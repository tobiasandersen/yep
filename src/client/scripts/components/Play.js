import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import LoadingSpinner from './LoadingSpinner'
import styles from 'styles/Play'

const Play = ({ buzz, hasStarted, player }) => (
  <div styleName="container">
    { hasStarted
      ? <span styleName="container">

          <div styleName="buzz-button" onClick={() => buzz(player.id)}>
            <span styleName="buzz-text">Press to answer</span>
          </div>

        </span>
        : <LoadingSpinner text="Waiting for game to start..." />
    }
  </div>
)

Play.propTypes = {
  buzz: PropTypes.func.isRequired,
  hasStarted: PropTypes.bool.isRequired
}

export default CSSModules(Play, styles)
