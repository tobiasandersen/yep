import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const CategoryListItem = ({ category }) => (
  <div styleName="list-item">
    {category.title}
  </div>
)

export default CSSModules(CategoryListItem, styles)
