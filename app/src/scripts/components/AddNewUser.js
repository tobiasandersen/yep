import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/AddNewUser'

const AddNewUser = ({ handleKeyPress, close }) => (
  <div styleName="container">
    <input 
      styleName="username" 
      type="text" 
      placeholder="Enter username"
      autofocus
      onKeyPress={(event) => {
        if (event.which === 13) {
          handleKeyPress(event.target.value)
          close()
        }
      }
      }>
    </input>
  </div>
)
AddNewUser.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}


export default CSSModules(AddNewUser, styles)
