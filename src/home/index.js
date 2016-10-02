import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import {deepOrange500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

class Main extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)

    this.state = {
      open: false,
    }
  }

  handleRequestClose() {
    this.setState({
      open: false,
    })
  }

  handleTouchTap() {
    this.setState({
      open: true,
    })
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary
        onTouchTap={this.handleRequestClose}
      />
    )

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            dialog-content-goes-here
          </Dialog>
          <h1>Material-UI11</h1>
          <h2>example project12aawww</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main