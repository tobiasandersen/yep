import React from 'react'
import styles from 'styles/ThisGame.css'
import ThisGameList from './ThisGameList'
import ButtonStart from './ButtonStart'

const ThisGame = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <h3>This Game</h3>
    </div>
    <ThisGameList />
    <ButtonStart />
  </div>
)

export default ThisGame
