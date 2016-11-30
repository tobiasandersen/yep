import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const PickedCategoryItem = ({ handleClick, name }) => (
  <div styleName="player">
    <span styleName="player-name">{name}</span>
    <button styleName="remove-button" onClick={handleClick}>✖</button>
  </div>
)

PickedCategoryItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default CSSModules(PickedCategoryItem, styles)
