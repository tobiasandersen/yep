import React, { Component } from 'react'
import styles from 'styles/GameSetup.css'
import UsersContainer from '../containers/UsersContainer'

class GameSetup extends Component {
  render() {
    return (
      <div className={styles.container}>
        <UsersContainer />
      </div>
    )
  }
}

export default GameSetup
