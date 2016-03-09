import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/AddNewUser'

const AddNewUser = ({ handleKeyPress, close, placeHolder }) => (
  <div styleName="container">
    <input 
      styleName="username" 
      type="text" 
      placeholder={placeHolder}
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
  close: PropTypes.func.isRequired,
  placeHolder: PropTypes.string
}


export default CSSModules(AddNewUser, styles)
