import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'


import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MaterialUi from './components'

import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/site.scss'


injectTapEventPlugin()
const dest = document.getElementById('content')

//******************* https://github.com/reactjs/react-redux/issues/259 ********
const store = configureStore()
//******************************************************************************
const render=(App)=>{
  ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {App}
        </MuiThemeProvider>
    </Provider>, dest)
}

if (module.hot) {
  module.hot.accept('./components', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    try{
    const NextApp = require('./components').default
    render(<AppContainer>
              <NextApp />
           </AppContainer>)
    } catch(error){
       const RedBox = require('redbox-react')
       ReactDOM.render(<RedBox error={error} className="redbox"/>, dest)
    }
  })
}

render( <AppContainer>
           <MaterialUi/>
        </AppContainer>)