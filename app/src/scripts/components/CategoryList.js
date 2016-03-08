import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'
import ButtonAdd from './ButtonAdd'
import CategoryListItem from './CategoryListItem'
import AddNew from './AddNew'

const CategoryList = ({ categories, categoryModalIsOpen, openCategoryModal, closeCategoryModal }) => (
  <div styleName="container">
    <div styleName="title">
      <h3>Categories</h3>
    </div>
    <div styleName="list">  
      {categories.map(category => (
        <CategoryListItem key={category.id} category={category} />
      ))}
    </div>
    <ButtonAdd handleClick={openCategoryModal} />
    <AddNew 
      modalIsOpen={categoryModalIsOpen} 
      closeModal={closeCategoryModal} />
  </div>
)

CategoryList.propTypes = { 
  categories: PropTypes.array.isRequired,
  categoryModalIsOpen: PropTypes.bool.isRequired,
  openCategoryModal: PropTypes.func.isRequired,
  closeCategoryModal: PropTypes.func.isRequired
}

export default CSSModules(CategoryList, styles)
