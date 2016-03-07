import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/CategoryListItem.css'

const CategoryListItem = ({ category }) => (
  <div styleName="container">
    {category.title}
  </div>
)

export default CSSModules(CategoryListItem, styles)
