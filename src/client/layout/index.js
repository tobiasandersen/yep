import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    return (
      <div className='test'>
        {this.props.children}
      </div>
    )
  }
}
