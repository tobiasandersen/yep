import React from 'react'
import styles from 'styles/ThisGame.css'
import ThisGameList from './ThisGameList'

const ThisGame = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      This Game
    </div>
    <ThisGameList />
  </div>
)

export default ThisGame
