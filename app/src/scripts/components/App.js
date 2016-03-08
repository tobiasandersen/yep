import React, { Component } from 'react'
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
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)

