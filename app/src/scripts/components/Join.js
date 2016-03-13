import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from 'styles/Join'

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
      <div styleName="container">
        <div styleName="content">

          <h3 styleName="title">Enter your name</h3>

          <input
            styleName="textfield"
            type="text" 
            placeholder="This will be your game name"
            onChange={(e) => {
              this.setState({ name: e.target.value })
            }}
          />

          <div styleName="button" onClick={() => {
            const name = this.state.name

            if (name != '') {
              addPlayer(name.trim())
              browserHistory.push('/play')
            }

          }}>Join game</div>

        </div>
      </div>
    )
  }
}

Join.propTypes = {
  addPlayer: PropTypes.func.isRequired
}

export default CSSModules(Join, styles)
