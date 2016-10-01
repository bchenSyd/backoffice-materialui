import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import App from './app'

injectTapEventPlugin()
const dest = document.getElementById('content')

const store = configureStore()
ReactDOM.render(
  <AppContainer>
     <App store={store}/>
  </AppContainer>, dest)


if (module.hot) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    try{
    const NextApp = require('./app').default
    ReactDOM.render(
      <AppContainer>
         <NextApp store={store}/>
      </AppContainer>,dest)
    } catch(error){
       const RedBox = require('redbox-react')
       ReactDOM.render(<RedBox error={error} className="redbox"/>, dest)
    }
  })
}