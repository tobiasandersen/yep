import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/PickedGameItem.css'

const PickedGameItem = ({ handleClick, name }) => (
  <div styleName="picked-item">
    <span styleName="title">{name}</span>
    <button styleName="remove-button" onClick={handleClick}>✖</button>
  </div>
)

PickedGameItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default CSSModules(PickedGameItem, styles)
