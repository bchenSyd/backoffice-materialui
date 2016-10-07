import React, {Component} from 'react'

import { browserHistory} from 'react-router'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ClearFix from 'material-ui/internal/ClearFix'
import spacing from 'material-ui/styles/spacing'
import {Tabs, Tab, Slider} from 'material-ui'
import withWidth, {SMALL,MEDIUM, LARGE} from 'material-ui/utils/withWidth'

const muiTheme = getMuiTheme()

class App extends Component {
    constructor(props) {
        super(props)
        this.onTabActivated = this.onTabActivated.bind(this)
        this.state = {
            navDrawerOpen: false
        }
    }

    handleTouchTapLeftIconButton() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        })
    }

    onTabActivated(tab){
         const route = tab.props['data-route']
         browserHistory.push(route)
    }

    render() {
       const menuBarStyle={
           flex:'6'
       }
       if (this.props.width === SMALL) {
           menuBarStyle.display='none'
       }
        return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar title="Back Office"
                    titleStyle={{minWidth:'150px'}}
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
                    zDepth={0}
                    iconStyleRight={menuBarStyle}
                    iconElementRight={
                        <div id='navi_menu_wraper' style={{display:'flex'}}>
                            <Tabs style={{flex:'1'}}>
                                <Tab label="Settlements"   data-route="/settlements"   onActive={this.onTabActivated}/>
                                <Tab label="Transactions"  data-route="/transactions"  onActive={this.onTabActivated}/>
                            </Tabs>
                            <div  className='foo' style={{flex:'2'}}/>
                            <IconButton   iconClassName="glyphicon glyphicon-user " iconStyle={{color:'white'}}/>
                        </div>}
                        showMenuIconButton>
                    </AppBar>
                    {this.props.children}
            </div>
        </MuiThemeProvider>    )
    }
}

export default withWidth()(App)