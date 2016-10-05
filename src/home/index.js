import React, {Component} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {TextField,
        RaisedButton,
        CircularProgress
        } from 'material-ui'


import searchApi from '../api/service'
import SearchBox from '../common/searchBox'
import SearchResult from './searchResult'

const muiTheme = getMuiTheme()

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this)
    this.setRef = this.setRef.bind(this)
    this.state={
      showResult : false,
      loading: false,
      searchResult :[]
    }
  }

  componentDidMount() {
    this.search_input.focus()
  }


  onSearchTextChanged(e) {
    const val = e.target.value
    this.setState({
        showResult: true,
        loading:true
    })
    searchApi.search(val).then((searchResult) => {
      this.setState({
        showResult: true,
        loading:false,
        searchResult
      })
    })
  }
 
 setRef(ref){
   this.search_input = ref
 }

 getResult(){
   const {showResult, loading, searchResult} = this.state
   if(!showResult){
     return null
  }
  if(loading){
    return  (<div className='margin-top-40 col-xs-2 col-xs-offset-4'>
          <CircularProgress />
      </div>)
  }

  return (searchResult.length > 0 ?
      searchResult.map((val,index)=>
        <SearchResult key={'index+' + index} result={val} />)
      :<div className='margin-top-10'>
          <span>We currently don't have any results for your search, try another</span>
      </div>)
 }

  render() {
    const {showResult, searchResult} = this.state
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
           <div className='row margin-top-10'>
             <div className = 'col-xs-12 col-md-8 col-md-offset-1'>
                <SearchBox  setRef={this.setRef} onChange={this.onSearchTextChanged}/>
              </div>
           </div>
            <div className='row margin-top-10'>
              <div className = 'col-xs-12 col-md-8 col-md-offset-1'>
                 { this.getResult() }
              </div>
            </div>
       </div>
      </MuiThemeProvider>
    )
  }
}

export default SearchPage
