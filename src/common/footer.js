import React, {Component, PropTypes} from 'react'

import ClearFix from 'material-ui/internal/ClearFix'
import spacing from 'material-ui/styles/spacing'
import {lightWhite, grey900} from 'material-ui/styles/colors'
import withWidth, {SMALL, LARGE} from 'material-ui/utils/withWidth'

const footer = props => {
    const footerStyle = {
        backgroundColor: grey900,
        textAlign: 'center',
        paddingTop: '5px',
        boxSizing: 'border-box',
        color:lightWhite
    }
    return (
        <div name='footer'  style={footerStyle}>
            <p>copyright@bambora.com</p>
        </div>
       
    )
}

footer.propTypes = {
    
}

export default footer


