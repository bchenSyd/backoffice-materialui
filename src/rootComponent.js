import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

class RootComponent extends Component {
    render() {
        const {store} = this.props
        return (<Provider store={store}>
            <Router routes={routes} history={browserHistory} />
        </Provider>)
    }
}

export default RootComponent