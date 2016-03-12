import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'
import { fetchUsers } from '../actions/users'
import { createNewGame } from '../actions/events'
import GameSetup from '../components/GameSetup'

class GameSetupContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(createNewGame())
    dispatch(fetchCategories())
    dispatch(fetchUsers())
  }

  render() {
    return (
      <GameSetup />
    )
  }
}

export default connect()(GameSetupContainer)
