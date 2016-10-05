import React, { Component, PropTypes} from 'react'
import {TextField } from 'material-ui'

class searchBox extends Component{

    render() {
        const {setRef, onChange} = this.props
        return (
            <div style={{ display: 'flex', justifyContent:'flex-start' }}>
                <TextField ref={setRef}
                    fullWidth
                    hintText="Search publishers"
                    onChange = {onChange}/>
                <span className='glyphicon glyphicon-search search-icon'/>
            </div>)
    }
}

searchBox.propTypes = {
    onChange: PropTypes.func,
    setRef: PropTypes.func
}

export default searchBox