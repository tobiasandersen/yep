import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const CategoryListItem = ({ handleClick, title }) => (
  <div styleName="list-item" onClick={handleClick}>
    {title}
  </div>
)

CategoryListItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default CSSModules(CategoryListItem, styles)
