import React, { PropTypes } from 'react'
import styles from 'styles/UserSearch'
import ButtonSquare from './ButtonSquare'

const UserSearch = ({ handleKeyPressed }) => (
  <div className={styles.container}>
    <input 
      type="text"
      id="userSearchInput"
      onkeydown={() => handleKeyPressed} 
      placeholder="Search for user" />
    <ButtonSquare />
  </div>
)

UserSearch.propTypes = {
  handleKeyPressed: PropTypes.func.isRequired
}

export default UserSearch
