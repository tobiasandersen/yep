import React, { Component } from 'react'
import Board from './Board'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'
import '../../styles/App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
  }

  render() {
    return (
      <Board />
    )
  }
}

export default connect()(App)

