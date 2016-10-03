import React, {Component} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {TextField,
        RaisedButton,
        FlatButton,
        Dialog} from 'material-ui'


import searchApi from '../api/service'
import SearchResult from './searchResult'

const muiTheme = getMuiTheme()

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this)
    this.state={
      showResult : false,
      searchResult :[]
    }
  }

  componentDidMount() {
    this.refs.search_input.focus()
  }


  onSearchTextChanged(e) {
    const val = e.target.value
    searchApi.search(val).then((searchResult) => {
      this.setState({
        showResult: true,
        searchResult
      })
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
    const {showResult, searchResult} = this.state
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
           <div className='row'>
             <div className = 'col-xs-8 col-xs-offset-1'>
                <TextField
                  ref='search_input'
                  fullWidth
                  hintText="Search publishers"
                  onChange = {this.onSearchTextChanged}
                  />
              </div>
              <div className="pull-left search" />
           </div>
            <div className='row margin-top-10'>
              <div className = 'col-xs-8 col-xs-offset-1'>
                {
                  showResult &&
                  (searchResult.length > 0 ? searchResult.map((val,index)=>
                          <SearchResult key={'index+' + index} result={val} />)
                          :<div className='margin-top-10'>
                              <span>We currently don't have any results for your search, try another</span>
                          </div>
                  )
                }
              </div>
            </div>
       </div>
      </MuiThemeProvider>
    )
  }
}

export default SearchPage
