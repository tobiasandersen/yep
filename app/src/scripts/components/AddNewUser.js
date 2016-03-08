import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/AddNewUser'

const AddNewUser = () => (
  <div styleName="container">
    <input styleName="username" type="text" placeholder="Enter username"></input>
  </div>
)

export default CSSModules(AddNewUser, styles)
