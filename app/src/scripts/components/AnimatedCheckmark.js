import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

const AnimatedCheckmark = ({ isVisible, height = 20, width = 20 }) => (
  <Motion style={{ 
    scale: spring(isVisible ? .9 : 0),
    width: spring(isVisible ? width : 0)
  }}>
    {({ scale, width }) => 
      <span style={{
        display: 'inline-block',
        marginRight: width / 3,
        width,
        height,
        position: 'relative',
        msTransform: 'rotate(45deg)',
        WebkitTransform: 'rotate(45ded)',
        transform: `rotate(45deg) scale(${scale})`,
        transformOrigin: '50% 50%',
        top: 4
      }}>
        <div style={{
          position: 'absolute',
          width,
          height,
          backgroundColor: '#3DA55F',
          borderRadius: width / 2,
          left: 0,
          top: 0
        }}></div>
        <div style={{
          position: 'absolute',
          width: 2,
          height: 9,
          backgroundColor: 'white',
          left: 10,
          top: 5
        }}></div>
        <div style={{
          position: 'absolute',
          width: 3,
          height: 2,
          backgroundColor: 'white',
          left: 7,
          top: 12
        }}></div>
      </span>
    }
  </Motion>
)

AnimatedCheckmark.propTypes = {
  isVisible: PropTypes.bool.isRequired
}

export default AnimatedCheckmark
