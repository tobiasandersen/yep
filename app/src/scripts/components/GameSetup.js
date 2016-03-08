import React, { Component } from 'react'
import styles from 'styles/GameSetup.css'
import UsersContainer from '../containers/UsersContainer'
import CategoryListContainer from '../containers/CategoryListContainer'
import ThisGame from './ThisGame'

class GameSetup extends Component {
  render() {
    return (
      <div className={styles.container}>
        <UsersContainer />
        <CategoryListContainer />
        <ThisGame />
      </div>
    )
  }
}

export default GameSetup
