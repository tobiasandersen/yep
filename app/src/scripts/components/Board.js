import React, { Component } from 'react'
import styles from 'styles/Board.css'
import CategoriesContainer from '../containers/CategoriesContainer'
import Players from './Players'

class Board extends Component {
  render() {
    return (
      <div className={styles.board}>
        <CategoriesContainer />
        <Players />
      </div>
    )
  }
}

export default Board

