import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'
import ButtonAdd from './ButtonAdd'
import CategoryListItem from './CategoryListItem'
import AddNew from './AddNew'
import EditCategoryContainer from '../containers/EditCategoryContainer'

const CategoryList = ({ 
  categories,
  categoryModalIsOpen,
  openCategoryModal,
  closeCategoryModal,
  addCategoryToGame,
  addNewCategory,
  openEditCategoryModal 
}) => (
  <div styleName="container">

    <div styleName="title">
      <h3>Categories</h3>
    </div>

    <div styleName="list">  
      {categories.map(category => (
        <CategoryListItem 
          handleClick={() => addCategoryToGame(category.id)}
          key={category.id} 
          title={category.title} 
        />
      ))}
    </div>

    <button onClick={() => openEditCategoryModal()}>Edit</button>

    <ButtonAdd handleClick={openCategoryModal} />

    <AddNew 
      modalIsOpen={categoryModalIsOpen} 
      closeModal={closeCategoryModal}
      addNew={addNewCategory}
      placeHolder="Enter Category Name" />
    <EditCategoryContainer />
  </div>
)

CategoryList.propTypes = { 
  categories: PropTypes.array.isRequired,
  categoryModalIsOpen: PropTypes.bool.isRequired,
  openCategoryModal: PropTypes.func.isRequired,
  closeCategoryModal: PropTypes.func.isRequired,
  openEditCategoryModal: PropTypes.func.isRequired,
  addCategoryToGame: PropTypes.func.isRequired,
  addNewCategory: PropTypes.func.isRequired
}

export default CSSModules(CategoryList, styles)