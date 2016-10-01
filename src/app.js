import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppContainer } from 'react-hot-loader'
import MaterialUiForm from './components/materialUiForm'


const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

export default (props)=>(
    <Provider store={props.store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
              <MaterialUiForm onSubmit={showResults}/>
      </MuiThemeProvider>
    </Provider>)