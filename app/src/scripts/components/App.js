import React, { Component } from 'react'
import GameSetup from './GameSetup'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'
import { fetchUsers } from '../actions/users'
import '../../styles/App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
    dispatch(fetchUsers())
  }

  render() {
    return (
      <GameSetup />
    )
  }
}

export default connect()(App)

