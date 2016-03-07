import React from 'react'
import styles from 'styles/CategoryList'
import ButtonAdd from './ButtonAdd'

const CategoryList = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      Title
    </div>
    <div className={styles.add}>
      <ButtonAdd />
    </div>
    <div className={styles.list}>

    </div>
  </div>
)

export default CategoryList
