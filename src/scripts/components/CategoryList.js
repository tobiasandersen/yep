import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/CategoryList'
import ButtonAdd from './ButtonAdd'
import CategoryListItem from './CategoryListItem'
import LoadingSpinner from './LoadingSpinner'
import AddNew from './AddNew'
import EditCategoryContainer from '../containers/EditCategoryContainer'

const CategoryList = ({
  categories,
  categoryModalIsOpen,
  openCategoryModal,
  closeCategoryModal,
  addCategoryToGame,
  addNewCategory,
  isFetching,
  editCategory
}) => console.log({categories}) || (
  <div styleName="container">

    <div styleName="title">
      <h3>Categories</h3>
    </div>

    <div styleName="categories">
      {isFetching
        ? <LoadingSpinner text="Loading..." theme="light"/>
        : categories.map(category => (
          <CategoryListItem
            handleClickAdd={() => addCategoryToGame(category.id)}
            handleClickEdit={() => {
              editCategory(category)
            }}
            key={category.id}
            title={category.title}
          />
        ))
      }
    </div>

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
  addCategoryToGame: PropTypes.func.isRequired,
  addNewCategory: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  editCategory: PropTypes.func.isRequired
}

export default CSSModules(CategoryList, styles)
