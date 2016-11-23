import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './store/configureStore'
import { AppContainer } from 'react-hot-loader'
import RootComponent from './rootComponent'


import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/_index.scss'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
const root = document.getElementById('root')
const store = configureStore()

render(<AppContainer>
    <RootComponent store={store} />
</AppContainer>, root)

if (module.hot) {
    module.hot.accept('./rootComponent', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./rootComponent').default
        render(<AppContainer>
            <NextApp store={store}/>
        </AppContainer>, root)
    })
}

