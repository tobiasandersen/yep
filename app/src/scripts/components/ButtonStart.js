import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'

const ButtonStart = ({ isReadyToStart }) => (
  <div style={{ 
    background: isReadyToStart ? '#3DA55F' : '#5F5F5F',
    bottom: 0,
    color: isReadyToStart ? 'white' : 'black',
    cursor: 'pointer',
    height: 50,
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    lineHeight: '50px',
    borderRadius: '0 0 20px 20px',
    transition: 'all .3s ease',
    width: '100%',
    textTransform: 'uppercase'
  }} onClick={() => {
    if (isReadyToStart) {
      browserHistory.push('/board')
    }
  }}>
    Start Game
  </div>
)

ButtonStart.propTypes = {
  isReadyToStart: PropTypes.bool.isRequired
}

export default ButtonStart
