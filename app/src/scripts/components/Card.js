import React from 'react'
import styles from 'styles/Card.css'

const Card = ({ value }) => (
  <div className={styles.card}>
    {value * 100}
  </div>
)

export default Card
