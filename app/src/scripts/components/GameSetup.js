import React, { Component } from 'react'
import styles from 'styles/GameSetup.css'
import UsersContainer from '../containers/UsersContainer'
import CategoryList from './CategoryList'
import ThisGame from './ThisGame'

class GameSetup extends Component {
  render() {
    return (
      <div className={styles.container}>
        <UsersContainer />
        <CategoryList />
        <ThisGame />
      </div>
    )
  }
}

export default GameSetup
