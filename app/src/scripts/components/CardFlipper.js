import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

class CardFlipper extends Component {
  render() {
    const cardSideStyles = {
      backfaceVisibility: 'hidden',
      left: 0,
      height: '100%',
      position: 'absolute',
      top: 0,
      width: '100%'
    }

    const { front, back, isFlipped } = this.props

    return (
      <Motion style={{ y: spring(isFlipped ? 180 : 0) }}>
        {({ y }) => 
          <div style={{
            height: '100%',
            transition: .6,
            transformStyle: 'preserve-3d',
            position: 'relative',
            transform: `rotateY(${y}deg)`
          }}>

            <div style={{
              ...cardSideStyles,
              zIndex: 2,
              transform: 'rotatey(0deg)'
            }}>
              {front}
            </div>

            <div style={{
              ...cardSideStyles,
              transform: 'rotatey(180deg)'
            }}>
              {back}
            </div>

          </div>
        }
      </Motion>
    )
  }
}

CardFlipper.propTypes = {
  back: PropTypes.element.isRequired,
  front: PropTypes.element.isRequired,
  isFlipped: PropTypes.bool.isRequired
}

CardFlipper.defaultProps = {
  isFlipped: false
}
  

export default CardFlipper
