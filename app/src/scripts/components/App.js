import React from 'react'
import { connect } from 'react-redux'

const App = ({ children }) => (
  <div>
    {children}
  </div>
)

export default connect()(App)

