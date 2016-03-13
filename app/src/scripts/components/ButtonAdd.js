import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/ButtonAdd'

const ButtonAdd = ({ handleClick }) => (
  <div styleName="button" onClick={handleClick}>
    Add New
  </div>
)

ButtonAdd.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(ButtonAdd, styles)
