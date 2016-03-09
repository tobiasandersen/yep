import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/EditCategory'

const EditCategory = () => (
  <div styleName="container">
    <div styleName="title">
      CategoryName
    </div>
  </div>
)

EditCategory.propTypes = {

}


export default CSSModules(EditCategory, styles)
