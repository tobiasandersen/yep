import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/CategoryListItem'

const CategoryListItem = ({ handleClickAdd, handleClickEdit, title }) => (
  <div styleName="container">
    <div styleName="icon" onClick={handleClickEdit}>
      ✎
    </div>
    <div styleName="title" onClick={handleClickAdd}>{title}</div>
    <div styleName="icon" onClick={handleClickAdd}></div>
  </div>
)

CategoryListItem.propTypes = {
  handleClickAdd: PropTypes.func.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default CSSModules(CategoryListItem, styles)
