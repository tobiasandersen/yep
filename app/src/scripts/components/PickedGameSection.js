import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/PickedGameSection.css'
import AnimatedCheckmark from './AnimatedCheckmark'

const PickedGameSection = ({ 
  content,
  title,
  addedItems,
  maxItems,
  minItems 
}) => (
  <div styleName="container">
    <h3 styleName="title">
      <AnimatedCheckmark isVisible={addedItems >= minItems} />
      {title} ({addedItems}/{maxItems})
    </h3>

    <div styleName="picked-items-container">
      {content.length > 0 
        ? content 
        : <div styleName="no-items-selected">
          Nothing added
        </div>
      }
    </div>

  </div>
)

PickedGameSection.propTypes = {
  addedItems: PropTypes.number.isRequired,
  content: PropTypes.array.isRequired,
  maxItems: PropTypes.number.isRequired,
  minItems: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default CSSModules(PickedGameSection, styles)
