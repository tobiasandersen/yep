import React, { PropTypes } from 'react'
import styles from 'styles/GameSetupBox.css'
import { Motion, spring } from 'react-motion'
import { browserHistory } from 'react-router'

const ButtonStart = ({ isReadyToStart }) => (
  <Motion style={{ 
    background: spring(isReadyToStart ? '#3DA55F' : '#5F5F5F'),
    color: spring(isReadyToStart ? 'white' : 'black')
  }}>
    {({ background, color }) => 
      <div style={{ 
        background, 
        bottom: 0,
        color,
        cursor: 'pointer',
        height: 50,
        left: 0,
        position: 'absolute',
        textAlign: 'center',
        lineHeight: 50,
        borderRadius: '0 0 20px 20px',
        width: '100%'
      }} onClick={() => {
        browserHistory.push('/board')
      }}>
        <span>Start Game</span>
      </div>
    }
  </Motion>
)

ButtonStart.propTypes = {
  isReadyToStart: PropTypes.bool.isRequired
}

export default ButtonStart
