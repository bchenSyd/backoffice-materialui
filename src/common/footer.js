import React, {Component, PropTypes} from 'react'

const footer = (props, context) => {
    const {footer:{color, backgroundColor}} = context.muiTheme
    const footerStyle = {
        backgroundColor,
        textAlign: 'center',
        paddingTop: '5px',
        boxSizing: 'border-box',
        color
    }
    return (
        <div name='footer'  style={footerStyle}>
            <p>copyright@bambora.com</p>
        </div>
       
    )
}

footer.contextTypes = {
    muiTheme : PropTypes.object.isRequired
}

export default footer


