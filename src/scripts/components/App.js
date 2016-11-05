import React from 'react'
import { connect } from 'react-redux'

const App = ({ children }) => (
  <div style={{ height: '100%', fontFamily: 'Proxima Nova' }}>
    {children}
  </div>
)

export default connect()(App)

