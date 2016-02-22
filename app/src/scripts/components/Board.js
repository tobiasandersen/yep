import React, { Component } from 'react'
import styles from 'styles/Board.css'
import Categories from './Categories'
import Cards from './Cards'
import Players from './Players'

class Board extends Component {
  render() {
    return (
      <div className={styles.board}>
        <Categories />
        <Cards />
        <Players />
      </div>
    )
  }
}

export default Board
