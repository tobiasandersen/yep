import React, { Component, PropTypes } from 'react'
import { Match, Link } from 'react-router'
import Dashboard from './dashboard/components'
import Layout from '../../layout'
import ConnectedRouter from 'components/router'
import { observer } from 'mobx-react'

@observer
export default class Routes extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    store: React.PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    const { store } = this.props
    const routingStore = store.get('routing')
    const dashboardStore = store.get('dashboard')

    return (
      <ConnectedRouter store={routingStore}>
        <div style={{ height: '100%', fontFamily: 'Proxima Nova' }}>
          <Match pattern="/" render={() => (<Dashboard store={dashboardStore} />)} />
          <Match pattern="/test" component={Test}/>
        </div>
      </ConnectedRouter>
    )
  }

}

const Test = ({ store }) => (
  <div style={{ height: '100%', fontFamily: 'Proxima Nova' }}>
    Test
    <Link to='/'>Go to dashboard</Link>
  </div>
)
