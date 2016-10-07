import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { Router, browserHistory} from 'react-router'
import routes from './routes'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/_index.scss'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()



const root = document.getElementById('root')

const store = configureStore()
render(<Provider store={store}>
        <Router history={browserHistory} >
            {routes}
        </Router>
    </Provider>, root)