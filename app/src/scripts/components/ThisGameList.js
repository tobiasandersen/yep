import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/GameSetupBox.css'

const ThisGameList = () => (
  <div styleName="list">
    <div styleName="list-title">
      Players
    </div>
    <div styleName="list-item-small">
      David
    </div>
    <div styleName="list-item-small">
      Tobias
    </div>
    <div styleName="list-item-small">
      Marcus
    </div>
    <div styleName="list-title">
      Categories Round 1
    </div>
    <div styleName="list-item-small">
      David
    </div>
    <div styleName="list-item-small">
      Tobias
    </div>
    <div styleName="list-item-small">
      Marcus
    </div>
    <div styleName="list-item-small">
      David
    </div>
    <div styleName="list-item-small">
      Tobias
    </div>
    <div styleName="list-title">
      Categories Round 2
    </div>
    <div styleName="list-item-small">
      David
    </div>
    <div styleName="list-item-small">
      Tobias
    </div>
    <div styleName="list-item-small">
      Marcus
    </div>
    <div styleName="list-item-small">
      David
    </div>
    <div styleName="list-item-small">
      Tobias
    </div>
  </div>
)

export default CSSModules(ThisGameList, styles)
