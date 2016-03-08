import React from 'react'
import { Link } from 'react-router'
import styles from 'styles/ButtonStart.css'

const ButtonStart = () => (
  <Link to="/board">
    <div className={styles.box}>
      Start Game
    </div>
  </Link>
)

export default CSSModules(ButtonStart, styles)
