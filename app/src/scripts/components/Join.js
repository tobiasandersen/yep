import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

class Join extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    const { addPlayer } = this.props

    return (
      <div>
        <h3>Oh, you wanna play from a phone huh?!</h3>
        <input 
          type="text" 
          placeholder="Enter name"
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
        />

        <button onClick={() => {
          const name = this.state.name

          if (name != '') {
            addPlayer(name)
            browserHistory.push('/play')
          }

        }}>Join game</button>

      </div>
    )
  }
}

Join.propTypes = {
  addPlayer: PropTypes.func.isRequired
}

export default Join
