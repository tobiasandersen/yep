import React, { PropTypes } from 'react'
import styles from 'styles/CategoryList'
import ButtonAdd from './ButtonAdd'
import CategoryListItem from './CategoryListItem'

const CategoryList = ({ categories }) => (
  <div className={styles.container}>
    <div className={styles.top}>
      Title
    </div>
    <div className={styles.add}>
      <ButtonAdd />
    </div>
    {categories.map(category => (
      <CategoryListItem key={category.id} category={category} />
    ))}
  </div>
)

CategoryList.propTypes = { 
  categories: PropTypes.array.isRequired
}

export default CategoryList
