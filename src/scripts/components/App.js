import React from 'react'
import { connect } from 'react-redux'

const App = ({ children }) => (
  <div style={{ height: '100%' }}>
    {children}
  </div>
)

export default connect()(App)

