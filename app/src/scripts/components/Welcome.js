import React from 'react'
import { browserHistory } from 'react-router'

const Welcome = () => (
  <div>
    <button onClick={() => browserHistory.push('/new')}>
      Create new game
    </button>

    <button onClick={() => browserHistory.push('/join')}>
      Join game
    </button>
  </div>
)

export default Welcome
