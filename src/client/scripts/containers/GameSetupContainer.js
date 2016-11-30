import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameSetup from '../components/GameSetup'

class GameSetupContainer extends Component {
  render() {
    return (
      <GameSetup />
    )
  }
}

export default connect()(GameSetupContainer)
