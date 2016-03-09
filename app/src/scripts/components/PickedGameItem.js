import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/ThisGameList.css'

const PickedGameItem = ({ handleClick, name }) => (
  <div styleName="picked-item">
    <span styleName="picked-item-title">{name}</span>
    <button styleName="remove-button" onClick={handleClick}>✖</button>
  </div>
)

PickedGameItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default CSSModules(PickedGameItem, styles)
