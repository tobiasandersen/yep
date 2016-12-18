import React, { Component, PropTypes } from 'react'
import History from 'react-history/BrowserHistory'
import { StaticRouter } from 'react-router'
import { reaction } from 'mobx'
import { observer } from 'mobx-react'

class SyncingRouter extends Component {

  constructor(props) {
    super(props)
    this.handleLocationChange(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.handleLocationChange(nextProps)
  }

  handleLocationChange = ({ store, history, action, location }) => {
    store.changeLocation(location)
  }

  render () {
    const { history = {}, action, location, basename, ...props } = this.props

    return (
      <StaticRouter
        action={action}
        location={location}
        basename={basename}
        onPush={history.push}
        onReplace={history.replace}
        blockTransitions={history.block}
        {...props}
      />)
  }
}

@observer
export default class ConnectedRouter extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.func,
    basename: PropTypes.string,
    keyLength: PropTypes.number
  }

  static contextTypes = {
    store: PropTypes.object
  }

  render () {
    const { basename, keyLength, store, ...props } = this.props
    const { locationBeforeTransitions } = store

    return (
      <History basename={basename} keyLength={keyLength}>
        {({ action, location, ...history }) => console.log({location, basename, locationBeforeTransitions}) || (
          <SyncingRouter
            store={this.props.store}
            action={action}
            history={history}
            location={locationBeforeTransitions || location}
            basename={basename}
            {...props}
          />
        )}
      </History>
    )
  }
}
