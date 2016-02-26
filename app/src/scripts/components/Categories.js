import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/Categories'

const Categories = ({ categories }) => (
  <div styleName="container">
    {categories.map(category => (
      <div key={category.id} styleName="item">{category.title}</div>
    ))}
  </div>
)

Categories.propTypes = { 
  categories: PropTypes.array.isRequired
}

export default CSSModules(Categories, styles)
