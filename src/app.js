import React, {Component} from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from './common/appBar'
import AppNavDrawer from './common/appNavDrawer'
import ClearFix from 'material-ui/internal/ClearFix'
import spacing from 'material-ui/styles/spacing'

import {grey50, grey800} from 'material-ui/styles/colors'
import {fade } from 'material-ui/utils/colorManipulator'

const bamboraPurple = '#552387'
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: bamboraPurple,
        primary2Color: bamboraPurple
    },
    appBar: {
        color:grey800
    },
    ripple: {
      color: fade(grey50, 0.87),
    },
        
})

class App extends Component {
    constructor(props) {
        super(props)
        this.onMenuClicked = this.onMenuClicked.bind(this)
        this.onNavDrawerClosing = this.onNavDrawerClosing.bind(this)
        this.state = {
            navDrawerOpen: false
        }
    }

    onMenuClicked() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        })
    }

   onNavDrawerClosing(){
        this.setState({
            navDrawerOpen: false
        })
   }


    render() {
        const {navDrawerOpen}= this.state
        return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar onMenuClicked = {this.onMenuClicked}/>
                <AppNavDrawer open={navDrawerOpen} onNavDrawerClosing={this.onNavDrawerClosing}/>
                <div className='container'>
                {this.props.children}
                </div>
            </div>
        </MuiThemeProvider>    )
    }
}

export default App