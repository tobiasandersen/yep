import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const CategoryListItem = ({ handleClickAdd, handleClickEdit, title }) => (
  <div styleName="list-item">
    <div styleName="list-item-title">{title}</div>
    <div styleName="list-item-icons">
      <div styleName="list-item-edit" onClick={handleClickEdit}>
        Edit
      </div>
      <div styleName="list-item-add" onClick={handleClickAdd}>
        Add
      </div>
    </div>
  </div>
)

CategoryListItem.propTypes = {
  handleClickAdd: PropTypes.func.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default CSSModules(CategoryListItem, styles)
